import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const TaskModal = ({ task, isOpen, onClose }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  if (!task) return null;

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleClose = () => {
    setComments([]);
    setNewComment("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
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
          <h3 className="text-lg font-semibold">Comments</h3>
          <div className="space-y-4 mt-4">
            {comments.map((comment, index) => (
              <div key={index} className="p-2 border rounded-lg">
                {comment}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Textarea
              placeholder="Add a comment..."
              value={newComment}
              onChange={handleCommentChange}
              className="mb-2"
            />
            <Button onClick={handleAddComment}>Add Comment</Button>
          </div>
        </div>
        <div className="mt-6">
          <Button onClick={handleClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskModal;