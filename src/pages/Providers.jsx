import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Providers = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");

  const handleAddEntry = () => {
    setEntries([...entries, newEntry]);
    setNewEntry("");
  };

  const handleDeleteEntry = (index) => {
    const updatedEntries = entries.filter((_, i) => i !== index);
    setEntries(updatedEntries);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Providers</h2>
      <div className="mb-4">
        <Input
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          placeholder="Add new entry"
        />
        <Button onClick={handleAddEntry} className="ml-2">Add</Button>
      </div>
      {entries.map((entry, index) => (
        <Card key={index} className="mb-2">
          <CardHeader>
            <CardTitle>{entry}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="destructive" onClick={() => handleDeleteEntry(index)}>Delete</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Providers;