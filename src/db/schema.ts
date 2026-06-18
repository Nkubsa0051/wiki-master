// import { usersSync} from "drizzle-orm/neon";
import {
    boolean,
    pgTable,
    serial,
    text,
    timestamp
} from "drizzle-orm/pg-core";
// Bbject Relational Mappper
//stand between Program/project and database


//pgTable (name of the table)
//articles (fields of the table)
//idtext,slug,content,imageUrl (js name)
//image_url (fields names)
//booleanpgTable,serial,text,timeStamp (Datatypes)

export const articles = pgTable("articles", {
    id: serial("id").primaryKey(),
    text: text("text").notNull(),
    slug: text("slug").notNull(),
    content: text("content").notNull(),
    imageUrl: text("image_url").notNull(),
    published: boolean("published").notNull().default(false),
    authorId: text("author_id").notNull().references(() => usersSync.id),
    createdAt: timestamp("created_at", {mode: "string"}).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", {mode: "string"}).defaultNow().notNull(),
});

const schema = {articles}
export default schema

export type Article = typeof articles.$inferSelect
export type NewArticle = typeof articles.$inferInsert

export const usersSync = pgTable("usersSync", {
    id: text("id").primaryKey(),
    name: text("name"),
    email: text("email"),
});

export type user = typeof usersSync.$inferSelect