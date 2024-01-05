import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import { Config } from "../lib/config.js";
import { UserRolesEnum } from "../utils/enumeration.util.js";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			lowercase: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		refreshToken: {
			type: String,
		},
		salt: {
			type: String,
		},
		profile: {
			type: mongoose.Types.ObjectId,
			ref: "Profile",
		},
		role: {
			type: String,
			enum: Object.values(UserRolesEnum),
			default: UserRolesEnum.User,
		},
	},
	{ timestamps: true }
);

userSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		try {
			const salt = await bcrypt.genSalt(10);
			const hashedVersion = await bcrypt.hash(this.password, salt);
			this.password = hashedVersion;
			this.salt = salt;
			next();
		} catch (err) {
			return next(err);
		}
	}
	return next();
});

userSchema.methods.isPasswordCorrect = async function (textPassword) {
	return await bcrypt.compare(textPassword, this.password);
};

userSchema.methods.serialize = function () {
	const self = this.toObject();
	delete self.password;
	delete self.refreshToken;
	delete self.salt;
	delete self.updatedAt;
	delete self.__v;
	return self;
};

userSchema.methods.generateAccessToken = function () {
	return jwt.sign(
		{
			id: this._id,
			email: this.email,
			role: this.role,
		},
		Config.Jwt.AccessTokenSecret,
		{
			expiresIn: Config.Jwt.AccessTokenExpiry,
		}
	);
};

userSchema.methods.generateRefreshToken = function () {
	return jwt.sign(
		{
			id: this._id,
			email: this.email,
			role: this.role,
		},
		Config.Jwt.RefreshTokenSecret,
		{
			expiresIn: Config.Jwt.RefreshTokenExpiry,
		}
	);
};

const User = mongoose.model("User", userSchema);

export default User;
