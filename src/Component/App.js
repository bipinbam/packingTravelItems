import { useState } from "react";
import { sort } from "semver";
import Logo from "./Logo";
import Form from "./form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }
  function handlDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handlClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form OnAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handlDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handlClearList}
      />
      <Stats items={items} />
    </div>
  );
}
