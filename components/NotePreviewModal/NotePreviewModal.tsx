"use client";

import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function NotePreviewModal({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();

  return <Modal onClose={() => router.back()}>{children}</Modal>;
}
