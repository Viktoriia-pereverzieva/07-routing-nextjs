import css from "./SidebarNotes.module.css";
import Link from "next/link";

export default async function SidebarNotes() {

    const tags: string[] = ["Work", "Personal", "Meeting", "Shopping", "Todo"];
 
  return (
    <aside className={css.sidebar}>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link href="/notes/filter/all" className={css.menuLink}>
            All notes
          </Link>
        </li>

        {tags.map((tag: string) => (
          <li key={tag} className={css.menuItem}>
            <Link
              href={`/notes/filter/${tag}`}
              className={css.menuLink}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
