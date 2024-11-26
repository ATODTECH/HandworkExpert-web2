import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

export default function CustomPagination() {
  const { items } = usePagination({
    count: 10,
  });
  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? "bold" : undefined,
                  color: selected ? "#000000" : "#98A2B3",
                  border:selected? '1px solid #F56630': '0',
                  backgroundColor:'transparent',
                  borderRadius:5,
                  padding:5,
                  width:30,
                  fontSize:10,
                  cursor:'pointer'

                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item} style={{display:'none'}}>
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}
