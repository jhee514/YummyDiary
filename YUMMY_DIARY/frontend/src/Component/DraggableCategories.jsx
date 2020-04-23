import testSearch from "../modules/dummy";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Typography, Box, Chip, makeStyles, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dragbox: {
    //border:"1px solid #000000",
    marginBottom: "2vh",
  },
  selectedbox: {
    //border: "1px solid #000000",
    display:"flex",
    alignContent:"center",
    overflow : "auto"

  },
  searchbox:{
    display:"flex",
    borderBottom : "1px solid #000000",
    marginBottom : "2vh"
  },
  search: {
    position: "relative",
    marginTop: "1vh",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

function DraggableCategories() {
  const [state, setState] = useState({
    items: [
      { id: "1", content: "item 1" },
      { id: "2", content: "item 2" },
      { id: "3", content: "item 3" },
      { id: "4", content: "item 4" },
      { id: "5", content: "item 5" },
    ],
    selected: [
     
      { id: "6", content: "item 6" },
      { id: "7", content: "item 7" },
      { id: "8", content: "item 8" },
      { id: "9", content: "item 9" },
    ],
  });
  const [searchInput, setSearchInput] = useState({  
    keyword : "",
    related : [],
  })

  const searchChangeEvent = event => {
    setSearchInput({
      ...searchInput,
      keyword : event.target.value
    })
    console.log(searchInput)
  }
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        source.droppableId === "droppable" ? state.items : state.selected,
        result.source.index,
        result.destination.index
      );

      setState({
        ...state,
        [source.droppableId === "droppable" ? "items" : "selected"]: items,
      });
    }else{
      const movedItems = move(
        source.droppableId === "droppable" ? state.items : state.selected,
        destination.droppableId === "droppable" ? state.items : state.selected,
        source,
        destination
      )
      setState({
        items : movedItems.droppable,
        selected: movedItems.droppable2
      })
    }
  };
  const classes = useStyles();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Typography>검색</Typography>
      {/* 검색 바 영역 */}
      <Box className={classes.searchbox}>
        <Box width="40%">
        <div className={classes.search} >
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            value={searchInput.keyword}
            onChange={searchChangeEvent}
          />
        </div>
        </Box>
        <Box width="100%">
        <Droppable droppableId="droppable" direction="horizontal">
        {(provided, snapshot) => (
          <Box
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={classes.selectedbox}
          >
            {state.items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <Box className={classes.dragbox} display="flex">
                    <Chip
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      label={item.content}
                    />
                  </Box>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </Box>
        )}
      </Droppable>
      </Box>
      </Box>
     
      <Droppable droppableId="droppable2" direction="horizontal">
        {(provided, snapshot) => (
          <Box
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={classes.selectedbox}
          >
            {state.selected.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <Box className={classes.dragbox} display="flex">
                    <Chip
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      label={item.content}
                    />
                  </Box>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DraggableCategories;
