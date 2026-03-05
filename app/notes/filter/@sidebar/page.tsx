import css from "./SidebarNotes.module.css";
import { fetchNotes } from "@/lib/api";
import Link from "next/link";
import type { NotesResponse } from "@/lib/api"; // импортируем типы

export default async function SidebarNotes() {
  // Берем все заметки
  const response: NotesResponse = await fetchNotes(1, "", 1000);

  // Собираем уникальные теги
  const tags: string[] = [];
  response.notes.forEach(() => {
    note.tags.forEach((tag: string) => {
      // <-- явно указываем тип
      if (!tags.includes(tag)) tags.push(tag);
    });
  });

  return (
    <aside className={css.sidebar}>
      <ul className={css.menuList}>
        {/* Все заметки */}
        <li className={css.menuItem}>
          <Link href="/notes/filter/all" className={css.menuLink}>
            All notes
          </Link>
        </li>

        {/* Динамические ссылки по тегам */}
        {tags.map(
          (
            tag: string // <-- явно указываем тип
          ) => (
            <li key={tag} className={css.menuItem}>
              <Link
                href={`/notes/filter/${encodeURIComponent(tag)}`}
                className={css.menuLink}
              >
                {tag}
              </Link>
            </li>
          )
        )}
      </ul>
    </aside>
  );
}
