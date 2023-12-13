import { Component } from "react";


import  {getSearchedImages} from "./api/api"

import  Searchbar  from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";


class App extends Component {
  state = {
    searchName: '',
    images: [],
    loading: false,
    error: '',
    page: 1,
    hasMoreImages: true,
  };

  changeSearchName = searchName => {
    this.setState({ searchName: searchName,images: [], page: 1, hasMoreImages: true });
  };

  componentDidUpdate(prevProps, prevState) {
     const { searchName, page, hasMoreImages } = this.state;

     if (searchName !== prevState.searchName) {
       this.handleImages(searchName, 1);
     }

     if (page !== prevState.page && hasMoreImages) {
       this.handleImages(searchName, page);
     }
  }

  handleImages = async (searchName, page) => {
    try {
      this.setState({ loading: true });
      const data = await getSearchedImages(searchName, page);

      if (data.hits.length<12) {
        this.setState({ hasMoreImages: false }); 
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        error: '',
        loading: false,
      }));

    } catch (error) {
      this.setState({ error: error.response.data, loading: false });
    }
  };

  loadMore = () => {
     this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, loading, error, hasMoreImages } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.changeSearchName} />

        {error && <h1>{error}</h1>}
        {loading&&<Loader/>}
        {images.length > 0 && (
          <div>
            <ImageGallery images={images}/>
            {hasMoreImages ? (
              <Button buttonClick={this.loadMore} />
            ) : (
              <p>No more images</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App

