import { IndexType, Permission } from "node-appwrite";

import { db, questionCollection } from "../index";
import { databases } from "./config";

export default async function createQuestionCollection() {
    // Create Collection
    await databases.createCollection(db, questionCollection, questionCollection, [
        Permission.read("any"),
        Permission.create("users"),
        Permission.read("users"),
        Permission.update("users"),
        Permission.delete("users"),
    ]);
    console.log(":: Question Collection Created ::");

    // Create Attributes
    await Promise.all([
        databases.createStringAttribute(db, questionCollection, "title", 100, true),
        databases.createStringAttribute(db, questionCollection, "content", 10000, true),
        databases.createStringAttribute(db, questionCollection, "authorId", 50, true),
        databases.createStringAttribute(db, questionCollection, "tags", 50, true, undefined, true),
        databases.createStringAttribute(db, questionCollection, "attachmentId", 50, false),
    ]);
    console.log(":: Question Attributes Created ::");
}
