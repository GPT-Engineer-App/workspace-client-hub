import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Dashboard = () => {
  const tasks = [
    { id: 1, title: "Task 1", description: "Description for task 1" },
    { id: 2, title: "Task 2", description: "Description for task 2" },
    { id: 3, title: "Task 3", description: "Description for task 3" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-xl mb-6">Welcome, [User's Name]!</p>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center space-x-4">
            <Checkbox id={`task-${task.id}`} />
            <div>
              <h2 className="text-lg font-semibold">{task.title}</h2>
              <p>{task.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Button>Add Task</Button>
      </div>
    </div>
  );
};

export default Dashboard;