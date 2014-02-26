(function ($) {
	
	$.docCollapse = {
			
		defaults: {
			margin:		'20'
		},
	
		init: function(me, options) {
			opts = $.extend({}, $.docCollapse.defaults, options);
			rightSrc = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD//gA8Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAKAP/bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIACgAKAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP38r8Hf+DgD/gsb8Zf+CXv/AAWt8A33g3XrzUvBFn4GsbnVfBd3cldJ1lJr69WfKgHypysMey4ALoUUfMheN/3ir8H/APg7z/4JJfED41a3Y/tOeCI5PEmj+D/Dcei+K9Ft4Ga80qzgmnnXUowM+bAvnyCYABoVRZPmjMrQgH65fsCft/8Aw3/4KS/s56V8Svhnq327Srz9xfWNwFS/0O7UAyWl1GCdkqblPBKupV0ZkZWPtg3AV/E3/wAEuP8AgqR8Rv8AglL+0XB468C3H23S78R23iTw3cylbHxHaKxPlvgHy5U3M0UwBaNieGRpI5P6+v2CP29fhz/wUg/Zw0f4mfDXVPt2kah+4vLKYqt9od4oUy2V1GCfLmTcp6lXVldC8bqxAPbKKKKACob2SOK2kaZlWFUJdmxtVcHJOamr8Ff+Dvn/AIKx/ET4PeKtP/Zl8EzzeGdB8V+G4tb8U6va3DJeaza3E1xANNUjHl25EDGbBJmVxGcRiRZQD8tP+C6t1+zld/8ABRXxe/7MsbR+Cd//ABNTaMh0N9W8x/tJ0oL0sidu3GY9/meTiDygPa/+DWSD9opv+Cjmnt8E/MXwZ+4HxKe/Vjof9k7zgTf9PmfM+y7P3u/f/wAsftFfNf8AwSu/4JW/ET/gq/8AtFReCfBMP9naLpuy48TeJbiIyWXh20Yth3AIMkr7WWKFSGkYHlUWSRP69v2Dv2EPh1/wTl/Zw0X4Z/DXSBp2j6aPOu7uZVa+1q8ZVEt7dyKB5s77VycBVVFRAkaIqgHtFFFFABX4V/8ABe7/AIIufGT/AIKk/wDBaTwHH4V0O60n4d3HgiwtNZ8aXMe7TtJWG+vWnUYOZLkJMmyEYLlxkogd0KKAP1s/YP8A2Dfh1/wTm/Z10j4a/DPSP7P0fTh5t1dT7WvtZuyFEl5dSKqiSZ9q5IAVVVURURVUezKMqOo46UUUAOooooA//9k=";
			downSrc = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD//gA8Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAKAP/bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIACgAKAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP38or8Hf+Cxv/BwB+2t/wAEvf2yte8G33gH4U2fgjUria78F6rc6PfXces6aCAreet1GrTx5UTR7VKOwOCjRu7v+CSX/B3nffGr9oCPwR+05Y+CfB+j+JHjt9F8V6LBNZWGlXRbaItQWaaXbBJkAXAZVhZf3imNmlhAP3goqGS9jitmmaSNYVXczlhtUYzkmvwb/wCCsf8Awd86r8Hv2iZ/BP7Mun+CfFeg+GZJbXV/FOt2817Z6zdK20rYCGaMNbpgjzyzLMTlAI1WSUA/eqivwr/4Iuf8F7v20v8AgqT+2RofhWPwH8Lbj4d6TMlz401m00a+tU0mxORhZ2upEFzIQRFHtYuVY4CJI6FAH6zft/8A7Anw5/4KS/s36t8M/iVpX2zSr7FxY30GEvtDvFVhHeWshB2SpuYcgq6lkcMjMp/kH/4Kkf8ABLj4jf8ABKX9o248C+OoBf6Xe77nw34ktoWSx8R2gIHmR5J8uVMqJYGJaNmHLI8ckn9smPnrxX9vX9gj4b/8FIP2dNU+GvxM0f8AtDSL799ZXkBEd/od2FKx3lpKQfLmTceoKurMjq0bspAP5Nrr/gur+0Vd/wDBOSP9mV/F8n/CExsbQ6rmT+230koFGjG53ZNkORtxv8s+Tv8AIAiHLf8ABK3/AIJXfEX/AIKv/tEw+CfBMX9m6Lp2y48S+JriEyWPh21YkB3GR5kshVljhUhpGB5VFkkT6Ug/4NZP2jm/4KJ/8KTbT/8AijFcX7/EoWj/ANh/2RuP78DOftnGz7Fu3+b/ABeT/pFf0xfsIfsHfDf/AIJy/s66R8Nfhnoq6bo+nATXd3NtkvtauyoWS9u5Qq+ZPJtXJwqqqqiKkaKigB+wb+wf8Ov+Cc37OukfDP4a6QunaPp/7+6upcNfazdlVWS8upAB5kzhVBOAqqqIoVEVQV7MFB7Dg8cUUAOooooAKKKKACiiigD/2Q==";

			
	    	$.docCollapse.setChildren(me);
	    	$(me).find('li').css('margin-left', opts.margin + 'px');
	    	$(me).find(':header').css('margin-left', '-' + opts.margin + 'px');
	    	$(me).find('li').children(':header').parent().css('list-style-type', 'none');
	    	$(me).find(':header').css('margin-bottom', '15px');
	    	$(me).find(':header').css('margin-top', '15px');
	    	$(me).find(':header').hover(function() { $(this).css('cursor', 'pointer'); });
	    	$.docCollapse.closeAll(me);
	    	var hash = $(location).attr('hash');
	    	
	    	if (hash) {
	    		$.docCollapse.goToHash(hash)
	    	}
	        
	        $(window).on('hashchange', function() {
	        	var hash = $(location).attr('hash');
	        	$.docCollapse.closeAll();
	        	$.docCollapse.goToHash(hash);
	        });
		},
		
		closeAll: function(me) {
	    	$(me).children().children().find('ul').hide();
	    	$(me).children().children().find('li').hide();
	    	$(me).children().children().find('li').children(':header').parent().children().hide();
	    	$(me).children().children().find('.DCarrow').show();
	    	$(me).children().children('p').hide();
	    	$(me).find(':header').removeClass('DCOpen');
	    	$(me).find(':header').addClass('DCClosed');
	    	$(me).find(':header').find('img').attr('src', rightSrc);
	    },
	    
	    expand: function(me) {
	    	$(me).children(':header').find('img').attr('src', downSrc);
			$(me).children(':header').addClass('DCOpen');
			$(me).children(':header').removeClass('DCClosed');
	    	$(me).children().show();
	    	$(me).children('ul').children('li').show();
	    	$(me).children('ul').children('li').children(':header').show();
	    },
	    
	    close: function(me) {
	    	$(me).children(':header').find('img').attr('src', rightSrc);
			$(me).children(':header').addClass('DCClosed');
			$(me).children(':header').removeClass('DCOpen');
	    	$(me).children('ul').children('li').children(':header').hide();
	    	$(me).children('ul').children('li').hide();
	    	$(me).children().hide();
	    	$(me).children(':header').show();
	    },
	    
	    setChildren: function(me) {
	    	$(me).children('li').children(':header').each(function() {
	        	$(this).html('<img class="DCarrow" src="' + rightSrc + '" style="height: ' + $(this).height() * .75 + 'px; padding-right: 5px; display: inline;" />' + $(this).html());
				$(this).addClass('DCClosed');
	    		$(this).click(function() {
	    			if ($(this).hasClass('DCClosed')) {
	    				$.docCollapse.expand($(this).parent());
	    			} else {
	    				$.docCollapse.close($(this).parent())
	    			}
	    		});
	    		$.docCollapse.setChildren($(this).parent().children('ul'))
	    	})
	    },
	    
	    goToHash: function(hash) {
	    	$.docCollapse.expandUp($(hash))
			window.location.hash = hash;
	    },
	    
	    expandUp: function(me) {
	    	if ($(me).hasClass('DCClosed')) {
	    		$.docCollapse.expand($(me).parent())
	    		$.docCollapse.expandUp($(me).parent().parent().parent().children(':header'))
	    	}
	    }
	};

    jQuery.fn.docCollapse = function(options) {
    	$.docCollapse.init(this, options);
    };

}( jQuery ));