import { spaceMarineClasses } from "../../data/classes";
import ClassCard from "./ClassCard";

export default function ClassGrid() {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      {spaceMarineClasses.map((marineClass) => (
        <ClassCard key={marineClass.id} marineClass={marineClass} />
      ))}
    </div>
  );
}
