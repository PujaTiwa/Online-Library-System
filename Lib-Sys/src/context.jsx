/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState, useContext, useEffect} from "react";
import { useCallback } from "react";

const url = "https://openlibrary.org/search.json?title=";
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [searchItem, setSearchItem ] = useState("the lost world..")
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [resultTitle, setResultTitle] = useState("")

    const fetchBooks = useCallback(async() => {
        setLoading(true)
        try {
            const resp = await fetch(`${url}${searchItem}`);
            const data = await resp.json()
            console.log(data);
            const {docs} = data;
            console.log(docs);
            
            if(docs) {
                const newBook = docs.slice(0, 20).map ((bookSingle) => {
                    const {key, author_name, cover_img, edition_count, first_publish_year, title} = bookSingle;
                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_img,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                setBooks(newBook);

                if(newBook.length > 1) {
                    setResultTitle("Your search result")
                } else {
                    setResultTitle('No search result found!')
                }
            } else {
                setBooks([]);
                setResultTitle("No search result found!!")
            }
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)  
        }
    }, [searchItem]);

    useEffect(() => {
        fetchBooks();
    }, [searchItem, fetchBooks]);

    return (
        <AppContext.Provider value={{
            loading, books, setSearchItem, resultTitle, setResultTitle
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};