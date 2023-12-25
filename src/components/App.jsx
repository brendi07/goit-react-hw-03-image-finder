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
    hasMoreImages: false,
  };

  changeSearchName = searchName => {
    this.setState({
      searchName: searchName,
      images: [],
      page: 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchName, page} = this.state;

    if (
      searchName !== prevState.searchName ||
      page !== prevState.page
    ) {
      this.handleImages(searchName, page);
    }
  }

  handleImages = async (searchName, page) => {
    try {
      this.setState({ loading: true });
      const data = await getSearchedImages(searchName, page);

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        error: '',
        hasMoreImages: this.state.page < Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: error.response.data });
    } finally {
      this.setState({ loading: false });
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
        {loading && <Loader />}
        {images.length > 0 && <ImageGallery images={images} />}
        {hasMoreImages && <Button buttonClick={this.loadMore} />}
      </div>
    );
  }
}

export default App

