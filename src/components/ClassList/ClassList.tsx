import React from "react";
import { ClassTag } from "@/components";

import { ClassListProps } from "@/types";

const ClassList: React.FC<ClassListProps> = ({
  classes,
  element,
  onToggle,
  onRemove,
}) => {
  return (
    <div className="h-80 overflow-auto !scrollbar-thin !scrollbar-thumb-[#7ebbe0] !scrollbar-track-[#E8F5FE]">
      <div className="flex flex-wrap gap-1.5 mb-2">
        {classes.map((cls) => (
          <ClassTag
            key={cls.name}
            className={cls.name}
            element={element}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default ClassList;
