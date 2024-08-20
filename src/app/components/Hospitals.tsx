"use client";
import HospitalList from "./HospitalList";
import { useEffect, useState } from "react";
import Pagination from "../components/pagination";
import { CSVLink } from "react-csv";
// import axios from 'axios'

const SkeletonCard: React.FC = () => (
  <div className="flex w-52 flex-col gap-4">
    <div className="skeleton h-32 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div>
);

const Hospitals: React.FC = () => {
  const [providers, setProviders] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(12);

  const [searchProvider, setSearchProvider] = useState<string>("");
  const [filteredProviders, setFilteredProviders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isLoaded = true;

    const fetchProviders = () => {
      setIsLoading(true);
      fetch("https://api.reliancehmo.com/v3/providers")
        .then((res) => res.json())
        .then((response) => {
          if (isLoaded) {
            setProviders(response?.data);
            console.log(response.data);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    fetchProviders();

    return () => {
      isLoaded = false;
    };
  }, []);

  useEffect(() => {
    fetch("https://api.reliancehmo.com/v3/providers")
      .then((res) => res.json())
      .then((response) => {
        setProviders(response?.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    const filtered = providers.filter((provider: any) => {
      const { name, state } = provider;
      const searchValue = searchProvider.toLowerCase();
      return (
        name.toLowerCase().includes(searchValue) ||
        state.name.toLowerCase().includes(searchValue)
      );
    });
    setFilteredProviders(filtered);
  }, [searchProvider, providers]);

  //   console.log(filteredProviders)

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = filteredProviders?.length
    ? filteredProviders?.slice(indexOfFirstPost, indexOfLastPost)
    : providers?.slice(indexOfFirstPost, indexOfLastPost);

  const handleShare = () => {
    if (navigator.share) {
      const shareData = {
        title: "Selected Provider",
        text: "Check out the selected hospital",
        url: window.location.href,
      };

      navigator
        .share(shareData)
        .then(() => {
          console.log("Successfully shared.");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      console.log("Web Share API not supported in this browser.");
    }
  };

  return (
    <div className="flex flex-col gap-6 p-12">
      <form className="w-full md:w-full">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          <input
          data-id="search"
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-Grey/900 border border-Grey/600 rounded-lg bg-gray-50 focus:ring-Primary focus:border-Primary dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-Primary dark:focus:Primary"
            placeholder="Search by city or state"
            required
            value={searchProvider}
            onChange={(e) => setSearchProvider(e.target.value)}
          />
        </div>
      </form>

      {/* <input
        type="text"
        placeholder="Search for a hospital"
        value={searchProvider}
        onChange={(e) => setSearchProvider(e.target.value)}
        className="p-4"
      /> */}

      <HospitalList providersArray={currentPosts} />

      <div className="grid grid-row-4 md:grid-cols-2 lg:grid-cols-4  gap-12">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : null}
      </div>

      <div className="flex justify-center gap-4">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filteredProviders.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <p className="font-medium text-green-300">
          showing {filteredProviders.length} Location
        </p>

        <div className="gap-4">
          <button className="btn btn-success my-2 md:my-0 " onClick={handleShare}>
            Share Selected Provider
          </button>

          <button className="btn btn-success mx-2">
            <CSVLink data={filteredProviders}>Export to CSV</CSVLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
