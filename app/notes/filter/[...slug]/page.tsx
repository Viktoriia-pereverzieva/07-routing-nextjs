
import NoteList from "@/components/NoteList/NoteList";
import { fetchNotes } from "@/lib/api";
import css from '../@sidebar/SidebarNotes.module.css'

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: Props) => {
    const { slug } = await params;

    const tag = slug[0] === "all" ? undefined : slug[0];

    const response = await fetchNotes(1, "", 10, tag);

  console.log(response)
    
  return (
    <div> 
      <h1 className={css.notelist}>
        NoteList
      </h1>
      {response?.notes?.length > 0 && < NoteList notes={response.notes} />}
      
    </div>
  );
}


export default NotesByCategory;