
import {createClient} from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
    space : "wtcl7wrmugbl",
    environment : "master",
    accessToken : "m9ifd7SvePa62x_jdQwfI_JbKU3sdCp1xQbbpUrdlhk"

});

  
  
const useGetAPI = () => {

    const [isLoading, setLoading] = useState(true)
    const [projects, setProjects] = useState([])

    const getApi = async () => {

        try {
            
            const res = await client.getEntries({content_type : "newprojects"});
            console.log(res);

           const projects = res.items.map((item) => {

            const {title,url,image} = item.fields;
            const id = item.sys.id
            const img = image?.fields?.file?.url;

            return {title,img,url,id}
           })
           setProjects(projects)
            setLoading(false)
          
        } catch (error) {
            console.log(error);
                 setLoading(false)
        }
    }

    useEffect(() => {
        getApi()
    }, [])

    return {isLoading,projects}
   
}


export default useGetAPI;