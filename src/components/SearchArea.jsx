import { useState } from "react";
import { FormControl, InputLabel, Input, Card, CardContent } from "@material-ui/core";

const SearchArea = ({ searchOnYoutube }) => {
  const [searchValue, setSearchValue] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    searchOnYoutube(searchValue);
  }

  return (
    <Card>
      <CardContent>
        <form className="search-area" onSubmit={onSubmit}>
          <FormControl fullWidth>
            <InputLabel>Enter Search Query</InputLabel>
            <Input value={searchValue} onChange={(e) => setSearchValue(e.currentTarget.value)} />
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchArea;
