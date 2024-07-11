import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskModal from "@/components/TaskModal";

const initialTasks = [
  { id: "1", title: "Task 1", description: "Description for task 1", status: "Not Started", assignedTo: "John Doe", notes: "Some notes for task 1" },
  { id: "2", title: "Task 2", description: "Description for task 2", status: "In Progress", assignedTo: "Jane Smith", notes: "Some notes for task 2" },
  { id: "3", title: "Task 3", description: "Description for task 3", status: "Review", assignedTo: "Alice Johnson", notes: "Some notes for task 3" },
];

const Dashboard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTasks = Array.from(tasks);
    const [movedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(reorderedTasks);
  };

  const openModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-xl mb-6">Welcome, [User's Name]!</p>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="flex items-center space-x-4 p-4 border rounded-lg"
                    >
                      <Checkbox id={`task-${task.id}`} />
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold">{task.title}</h2>
                        <p>{task.description}</p>
                        <p><strong>Status:</strong> {task.status}</p>
                        <p><strong>Assigned to:</strong> {task.assignedTo}</p>
                      </div>
                      <Button onClick={() => openModal(task)}>View</Button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="mt-6">
        <Button>Add Task</Button>
      </div>
      <TaskModal task={selectedTask} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Dashboard;