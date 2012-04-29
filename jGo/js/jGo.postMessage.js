jGo.postMessage = {};

(function () {

		  // A few vars used in non-awesome browsers.
		  var interval_id,
		    	last_hash,
			first_try=true,
		    	cache_bust = 1,
		    
		    	// A var used in awesome browsers.
		    	rm_callback,
		    
		    	// A few convenient shortcuts.
		    	window = this,
		    	FALSE = !1,
		    
		    	// Reused internal strings.
		    	postMessage = 'postMessage',
		    	addEventListener = 'addEventListener',
		    
		    	p_receiveMessage,
		    
		    	// I couldn't get window.postMessage to actually work in Opera 9.64!
		    	has_postMessage = window[postMessage];
		  
		 
		  
		  jGo.postMessage.post = function( message, target_url, target ) {
		    if ( !target_url ) { return; }
		    
		    // Serialize the message if not a string. Note that this is the only real
		    // jQuery dependency for this script. If removed, this script could be
		    // written as very basic JavaScript.
		    message = typeof message === 'string' ? message : jGo.$.param( message );
		    // Default to parent if unspecified.
		    target = target || parent;
		    
		    if ( has_postMessage ) {
		      // The browser supports window.postMessage, so call it with a targetOrigin
		      // set appropriately, based on the target_url parameter.
		      target[postMessage]( message, target_url.replace( /([^:]+:\/\/[^\/]+).*/, '$1' ) );
		      
		    } else if ( target_url ) {
		      // The browser does not support window.postMessage, so set the location
		      // of the target to target_url#message. A bit ugly, but it works! A cache
		      // bust parameter is added to ensure that repeat messages trigger the
		      // callback.
		      target.location = target_url.replace( /#.*$/, '' ) + '#' + (+new Date) + (cache_bust++) + '&' + message;
		    }
		  };
		  
		
		  
		  jGo.postMessage.receive = p_receiveMessage = function( callback, source_origin, delay ) {
		    if ( has_postMessage ) {
		      // Since the browser supports window.postMessage, the callback will be
		      // bound to the actual event associated with window.postMessage.
		      
		      if ( callback ) {
		        // Unbind an existing callback if it exists.
		        rm_callback && p_receiveMessage();
		        
		        // Bind the callback. A reference to the callback is stored for ease of
		        // unbinding.
		        rm_callback = function(e) {
		          if ( ( typeof source_origin === 'string' &&  source_origin.indexOf(e.origin)!=0)
		            || ( jGo.$.isFunction( source_origin ) && source_origin( e.origin ) === FALSE ) ) {
		            return FALSE;
		          }
		          callback( e );
		        };
		      }
		      
		      if ( window[addEventListener] ) {
		        window[ callback ? addEventListener : 'removeEventListener' ]( 'message', rm_callback, FALSE );
		      } else {
		        window[ callback ? 'attachEvent' : 'detachEvent' ]( 'onmessage', rm_callback );
		      }
		      
		    } else {
		      // Since the browser sucks, a polling loop will be started, and the
		      // callback will be called whenever the location.hash changes.
		      
		      interval_id && clearInterval( interval_id );
		      interval_id = null;
		      
		      if ( callback ) {
		        delay = typeof source_origin === 'number'
		          ? source_origin
		          : typeof delay === 'number'
		            ? delay
		            : 100;
		        
		        interval_id = setInterval(function(){
		          var hash = document.location.hash,
		            re = /^#?\d+&/;
			  if(first_try){
				last_hash = document.location.hash;
				first_try=false;
			  }
		          if ( hash !== last_hash && re.test( hash ) ) {
		            last_hash = hash;
		            callback({ data: hash.replace( re, '' ) });
		          }
		        }, delay );
		      }
		    }
		  };
		  

})();

//Class Initialization
if(jGo.scripts)jGo.scripts.onLoad('jGo.postMessage.min.js');


