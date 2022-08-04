export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        
        url.hostname="xx.viagle.com";
        let new_request=new Request(url,request);
        
        new_request.headers.append('x-request', 'CF-Request');
        
        return fetch(new_request);  
        //const response = await fetch(new_request);      
        //response.headers.set('Cache-Control', 'public, max-age=604800');
        //response.headers.set('Pragma', 'public');
        //return response;
        
        
        // https://developers.cloudflare.com/pages/how-to/add-custom-http-headers/
        
        // This proxies your Pages application under the condition that your Worker script is deployed on the same custom domain as your Pages project
        //const response = await fetch(new_request);

        // Clone the response so that it is no longer immutable
        //const newResponse = new Response(response.body, response);

        // Add a custom header with a value
        //newResponse.headers.append('Cache-Control', 'public, max-age=604800');
        //newResponse.headers.append('Pragma', 'public');

        // Delete headers
        // newResponse.headers.delete('x-header-to-delete');
        // newResponse.headers.delete('x-header2-to-delete');

        // Adjust the value for an existing header
        // newResponse.headers.set('x-header-to-change', 'NewValue');

        //return newResponse;
      }
      // Otherwise, serve the static assets.
      return env.ASSETS.fetch(request);
    }
  };
