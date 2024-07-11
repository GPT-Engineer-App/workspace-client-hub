import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const TaskModal = ({ task, isOpen, onClose }) => {
  if (!task) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{task.title}</DialogTitle>
          <DialogDescription>{task.description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <p><strong>Status:</strong> {task.status}</p>
          <p><strong>Assigned to:</strong> {task.assignedTo}</p>
          <p><strong>Notes:</strong> {task.notes}</p>
        </div>
        <div className="mt-6">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;