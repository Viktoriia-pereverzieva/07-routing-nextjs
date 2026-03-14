"use client";

import { fetchNotes } from "@/lib/api";
import type { NotesResponse } from "@/lib/api";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { useState, useEffect, useMemo } from "react";

import Pagination from "@/components/Pagination/Pagination";
import SearchBox from "@/components/SearchBox/SearchBox";
import NoteList from "@/components/NoteList/NoteList";

import { useDebouncedCallback } from "use-debounce";
import { loadingError, searchError } from "@/components/Error/Error";
import { Toaster } from "react-hot-toast";
import css from './slug.module.css'
import { useParams } from "next/navigation";

type Props = {
  params: { slug: string[] };
};

export default function NotesByCategory() {
  const params = useParams();
  const slug = params.slug as string[];
  const tag = slug?.[0] === "all" ? undefined : slug?.[0];

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");

  const { data, isLoading, isError } = useQuery<NotesResponse>({
    queryKey: ["notes", currentPage, search, tag],
    queryFn: () => fetchNotes(currentPage, search, 12, tag),
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (isError) {
      loadingError();
    }
  }, [isError]);

  const notes = useMemo(() => data?.notes ?? [], [data]);
  const totalPages = useMemo(() => data?.totalPages ?? 0, [data]);

  useEffect(() => {
    if (!isLoading && search && notes.length === 0) {
      searchError();
    }
  }, [notes, search, isLoading]);

  const handleChange = useDebouncedCallback((value: string) => {
    setSearch(value);
    setCurrentPage(1);
  }, 500);

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <SearchBox
          value={inputValue}
          onChange={(value) => {
            setInputValue(value);
            handleChange(value);
          }}
        />

        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        )}

        <button className={css.button}>Create note +</button>
      </header>

      {notes.length > 0 && <NoteList notes={notes} />}
      <Toaster />
    </div>
  );
}
