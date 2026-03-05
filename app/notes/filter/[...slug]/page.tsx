
import { fetchNotes } from "@/lib/api";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByCategory = async ({ params }: Props) => {
    const { slug } = await params;

    const tag = slug[0] === "all" ? undefined : slug[0];

    const response = await fetchNotes(1, "", 10, tag);

    console.log(response);
}


export default NotesByCategory;