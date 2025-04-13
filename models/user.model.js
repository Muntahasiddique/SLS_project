const bcrypt = require("bcryptjs");
const { ObjectId } = require("mongodb");
const db = require("../data/database");

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // ✅ Register a new user (Signup)
    async signup() {
        const hashedPassword = await bcrypt.hash(this.password, 12);
        await db.getDb().collection("users").insertOne({
            username: this.username,
            email: this.email,
            password: hashedPassword,
            role: "student", // Default role
            createdAt: new Date(),
        });
    }

    // ✅ Find a user by email
    async getUserByEmail() {
        return await db.getDb().collection("users").findOne({ email: this.email });
    }

    // ✅ Check if the user exists
    async existsAlready() {
        return !!(await this.getUserByEmail());
    }

    // ✅ Find a user by ID (excluding password)
    static async findById(userId) {
        const uid = new ObjectId(userId);
        return await db.getDb().collection("users").findOne(
            { _id: uid },
            { projection: { password: 0 } }
        );
    }

    // ✅ Verify password for login
    async passwordIsCorrect(hashedPassword) {
        return await bcrypt.compare(this.password, hashedPassword);
    }
}

module.exports = User;
