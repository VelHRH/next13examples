import { db } from "@/lib/db";
import { books } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export default async function Home() {
 const booksArray = await db.select().from(books).orderBy(books.id);

 const createBook = async (data: FormData) => {
  "use server";
  const existing = await db
   .select()
   .from(books)
   .where(sql`${books.name} = ${data.get("book")}`);
  console.log(existing.length);
  if (existing.length === 0) {
   await db.insert(books).values({ name: data.get("book") as string });
   revalidatePath("/");
  }
 };
 return (
  <div className="w-full flex p-10 text-center text-pink-500 text-2xl gap-4 items-start">
   <form className="w-1/3 flex flex-col" action={createBook}>
    <input type="text" name="book" className="w-full p-2 text-black"></input>
    <button className="text-white bg-pink-500 rounded-full w-full py-1 mt-3 hover:bg-pink-600 transition">
     Add
    </button>
   </form>
   <div className="flex-1 border-2 border-pink-500 p-5 rounded-2xl flex flex-col items-start">
    {booksArray.map((book) => (
     <p key={book.id} className="py-1">
      {book.id}. {book.name}
     </p>
    ))}
   </div>
  </div>
 );
}
