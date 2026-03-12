"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { updateUserRole } from "@/services/users";

type Props = {
  userId: string;
};

const MakeProviderDialog = ({ userId }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    try {
      setLoading(true);

      await updateUserRole(userId, "provider");

      toast.success("User promoted to provider");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Make Provider</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Promote User</DialogTitle>
        </DialogHeader>

        <p>Are you sure you want to make this customer a provider?</p>

        <DialogFooter>
          <Button variant="outline">Cancel</Button>

          <Button onClick={handleUpdate} disabled={loading}>
            {loading ? "Updating..." : "Confirm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MakeProviderDialog;