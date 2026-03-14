import fetchNoteById from "@/lib/api";
import NotePreviewModal from "@/components/NotePreviewModal/NotePreviewModal";
import css from "@/app/notes/[id]/NoteDetails/NoteDetails.module.css";

type Props = {
  params: { id: string };
};

export default async function NotePreview({ params }: Props) {
  const note = await fetchNoteById(params.id);
  console.log("ID:", params.id);

  return (
    <NotePreviewModal>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>{note.createdAt}</p>
        </div>
      </div>
    </NotePreviewModal>   
  ); 
}


