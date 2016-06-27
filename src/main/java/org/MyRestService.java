package org;


import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/hello")
public class MyRestService {

	@POST
	@Path("/addCustomer")
    @Produces("text/html")
    public Response getResultByPassingValue(
                    @FormParam("name") String name,
                    @FormParam("lastname") String lastname) {
        
        String output = "Customer name - "+name+", Customer Last Name - "+lastname+"";
        
        return Response.status(200).entity(output).build();
 
    }
	
}
