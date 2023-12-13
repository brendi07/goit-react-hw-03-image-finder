import { Hearts } from 'react-loader-spinner';

export const Loader = () => {

    
  return (
    <div>
      <p>Loading</p>
      <Hearts
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
