import { spaceMarineClasses, type SpaceMarineClass } from "../../data/classes";
import ClassCard from "./ClassCard";

type ClassGridProps = {
  selectedClassId?: string;
  onSelectClass?: (marineClass: SpaceMarineClass) => void;
};

export default function ClassGrid({
  selectedClassId,
  onSelectClass,
}: ClassGridProps) {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      {spaceMarineClasses.map((marineClass) => (
        <ClassCard
          key={marineClass.id}
          isSelected={selectedClassId === marineClass.id}
          marineClass={marineClass}
          onSelect={onSelectClass}
        />
      ))}
    </div>
  );
}
