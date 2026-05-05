import React, { useRef, useState } from "react";
import "./styles.css";
import { cloneDeep } from "lodash";
import { MdExpandLess, MdExpandMore, MdDeleteOutline } from "react-icons/md";
import { FiFolderPlus } from "react-icons/fi";
import { AiOutlineFileAdd } from "react-icons/ai";

const initialData = [
  {
    id: 1,
    name: "public",
    isFolder: true,
    isOpen: false,
    children: [{ id: 2, name: "index.html", isFolder: false }],
  },
  {
    id: 3,
    name: "src",
    isFolder: true,
    isOpen: false,
    children: [
      { id: 4, name: "App.js", isFolder: false },
      { id: 5, name: "index.js", isFolder: false },
    ],
  },
  { id: 6, name: "package.json", isFolder: false },
];

const FileAndFolder = ({
  data,
  openCloseTree,
  handleDelete,
  setAddClicked,
  setSelectedFolder,
}) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="leftMargin fileAndFolder" key={item?.id}>
            {item?.isFolder && (
              <div className="folder" key={item?.id}>
                {!item?.isOpen && (
                  <MdExpandLess onClick={() => openCloseTree(item)} />
                )}
                {item?.isOpen && (
                  <MdExpandMore onClick={() => openCloseTree(item)} />
                )}
                <span>{item?.name}</span>
                <FiFolderPlus
                  onClick={() => {
                    setSelectedFolder(item);
                    setAddClicked(true);
                  }}
                />
                <AiOutlineFileAdd />
                <MdDeleteOutline onClick={() => handleDelete(item)} />
              </div>
            )}
            {!item?.isFolder && (
              <div>
                <span>{item?.name}</span>
                <MdDeleteOutline />
              </div>
            )}
            {item?.isFolder && item?.isOpen && (
              <FileAndFolder
                data={item?.children}
                openCloseTree={openCloseTree}
                handleDelete={handleDelete}
                setAddClicked={setAddClicked}
                setSelectedFolder={setSelectedFolder}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const FileExplorer = () => {
  const [tree, setTree] = useState(initialData);
  const [addClicked, setAddClicked] = useState(false);
  const [newName, setNewName] = useState("");
  const [selectedFolder, setSelectedFolder] = useState(null);
  const ref = useRef(null);
  const findAndUpdate = (newTree, data) => {
    for (let key in newTree) {
      if (newTree[key].id === data?.id) {
        newTree[key].isOpen = !data.isOpen;
        return newTree;
      } else if (newTree[key]?.children?.length > 0) {
        findAndUpdate(newTree[key]?.children, data);
      }
    }
    return newTree;
  };

  const findAndAdd = (newTree, data, value) => {
    for (let key in newTree) {
      if (newTree[key].id === data?.id) {
        newTree[key].children.push({
          id: new Date().getTime(),
          isFolder: true,
          children: [],
          name: value,
        });
        return newTree;
      } else if (newTree[key]?.children?.length > 0) {
        findAndAdd(newTree[key]?.children, data);
      }
    }
    return newTree;
  };

  const deleteItem = (newTree, data) => {
    let exist = newTree.find((i) => i?.id === data?.id);
    if (exist) {
      const mod = newTree.filter((i) => i.id !== data.id);
      return mod;
    }
  };

  const handleDelete = (data) => {
    console.log("data", data);
    let newTree = cloneDeep(tree);
    newTree = deleteItem(newTree, data);
    console.log("newTree", newTree);
    setTree([...newTree]);
  };

  const openCloseTree = (data) => {
    console.log("data", data);
    let newTree = cloneDeep(tree);
    newTree = findAndUpdate(newTree, data);
    console.log("newTree", newTree);
    setTree([...newTree]);
  };

  const pushInTree = (newValue) => {
    console.log("newValue", newValue);
    console.log("setSelectedFolder", selectedFolder);
    // console.log("data", data);
    let newTree = cloneDeep(tree);
    newTree = findAndAdd(newTree, selectedFolder, newValue);
    console.log("newTree", newTree);
    setTree([...newTree]);
    setNewName("");
    ref.current.value = null;
  };
  return (
    <>
      <FileAndFolder
        data={tree}
        openCloseTree={openCloseTree}
        handleDelete={handleDelete}
        setAddClicked={setAddClicked}
        setSelectedFolder={setSelectedFolder}
      />
      {addClicked && (
        <div className="modal">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              ref={ref}
              onChange={(e) => setNewName(e?.target?.value)}
            ></input>
          </div>
          <div>
            <button onClick={(e) => pushInTree(newName)}>Add</button>
            <button onClick={() => setAddClicked(!addClicked)}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FileExplorer;
