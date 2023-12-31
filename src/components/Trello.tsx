import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Trello() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="one">
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            <Draggable draggableId="first" index={0}>
              {(provided) => (
                <li ref={provided.innerRef} {...provided.draggableProps}>
                  <span {...provided.dragHandleProps}>👋</span>
                  One
                </li>
              )}
            </Draggable>
            <Draggable draggableId="second" index={1}>
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  Two
                </li>
              )}
            </Draggable>
            <Draggable draggableId="third" index={2}>
              {(provided) => (
                <li
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  Three
                </li>
              )}
            </Draggable>
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Trello;
