		javascript:document.querySelector('meta[name=viewport]').setAttribute('content','width=device-width,initial-scale=1.0,maximum-scale=10.0,user-scalable=1');

		$(function() { 			
			$.ajax({
				url:'http://www.bvu.edu/about/news/rss.dot',
				dataType:'xml',
				type:'GET',
				success:function(xml) {
					$(xml).find('item').each(function() {
						var title = $(this).find("title").text(); 
						var des = $(this).find("description").text();
						var link = $(this).find("link").text();
						var $des = $('<div class="linkitem"></div>').html(des);
						var $link = $('<h3></h3>').attr('href',link).attr('target','_blank').html(title);
						
						var pubDate = new Date($(this).find("pubDate").text()); 
						var day = pubDate.getDate();
						var month = pubDate.getMonth() + 1;
						var year = pubDate.getFullYear();
						var date = month + '/' + day + '/' + year;
						var $date = $('<div class="date"></div>').text(date)	
						var wrapper = "<div class='single-feed'>";
						$(".main-container").append($(wrapper).append($link,$date, $des));
						
					})

				},
				error:function() {
					alert("I am sorry, But I can't fetch that feed");
				}
			});
		});
		
		$(function() { 			
			$.ajax({
				url:'http://www.bvu.edu/about/news/bvunews-rss.dot',
				dataType:'xml',
				type:'GET',
				success:function(xml) {
					$(xml).find('item').each(function() {
						var title = $(this).find("title").text(); 
						var des = $(this).find("description").text();
						var link = $(this).find("link").text();
						var $des = $('<div class="linkitem"></div>').html(des);
						var $link = $('<h3></h3>').attr('href',link).attr('target','_blank').html(title);
						
						var pubDate = new Date($(this).find("pubDate").text()); 
						var day = pubDate.getDate();
						var month = pubDate.getMonth() + 1;
						var year = pubDate.getFullYear();
						var date = day + '/' + month + '/' + year;
						var $date = $('<div class="date"></div>').text(date)	
						var wrapper = "<div class='single-feed'>";
						$(".news-container").append($(wrapper).append($link, $des));
						
					})

				},
				error:function() {
					alert("I am sorry, But I can't fetch that feed");
				}
			});
		});
		
		$(function() { 			
			$.ajax({
				url:'http://www.bvu.edu/athletics/rss.dot',
				dataType:'xml',
				type:'GET',
				success:function(xml) {
					$(xml).find('item').each(function() {
						var title = $(this).find("title").text(); 
						var des = $(this).find("description").text();
						var link = $(this).find("link").text();
						var $des = $('<div class="linkitem"></div>').html(des);
						var $link = $('<h3></h3>').attr('href',link).attr('target','_blank').html(title);
						
						var pubDate = new Date($(this).find("pubDate").text()); 
						var day = pubDate.getDate();
						var month = pubDate.getMonth() + 1;
						var year = pubDate.getFullYear();
						var date = month + '/' + day + '/' + year;
						var $date = $('<div class="date"></div>').text(date)	
						var wrapper = "<div class='single-feed'>";
						$(".events-container").append($(wrapper).append($link, $date, $des));
						
					})

				},
				error:function() {
					alert("I am sorry, But I can't fetch that feed");
				}
			});
		});
		
				$(function() { 			
			$.ajax({
				url:'http://www.bvtack.com/category/arts-life/feed/',
				dataType:'xml',
				type:'GET',
				success:function(xml) {
					$(xml).find('item').each(function() {
						var title = $(this).find("title").text(); 
						var des = $(this).find("description").text();
						var link = $(this).find("link").text();
						var $des = $('<div class="linkitem"></div>').html(des);
						var $link = $('<h3></h3>').attr('href',link).attr('target','_blank').html(title);
						
						var pubDate = new Date($(this).find("pubDate").text()); 
						var day = pubDate.getDate();
						var month = pubDate.getMonth() + 1;
						var year = pubDate.getFullYear();
						var date = month + '/' + day + '/' + year;
						var $date = $('<div class="date"></div>').text(date)	
						var wrapper = "<div class='single-feed'>";
						$(".tackarts-container").append($(wrapper).append($link,$date, $des));
						
					})

				},
				error:function() {
					alert("I am sorry, But I can't fetch that feed");
				}
			});
		});
		
		$(function() { 			
			$.ajax({
				url:'http://www.bvtack.com/category/blogs/feed/',
				dataType:'xml',
				type:'GET',
				success:function(xml) {
					$(xml).find('item').each(function() {
						var title = $(this).find("title").text(); 
						var des = $(this).find("description").text();
						var link = $(this).find("link").text();
						var $des = $('<div class="linkitem"></div>').html(des);
						var $link = $('<h3></h3>').attr('href',link).attr('target','_blank').html(title);
						
						var pubDate = new Date($(this).find("pubDate").text()); 
						var day = pubDate.getDate();
						var month = pubDate.getMonth() + 1;
						var year = pubDate.getFullYear();
						var date = month + '/' + day + '/' + year;
						var $date = $('<div class="date"></div>').text(date)	
						var wrapper = "<div class='single-feed'>";
						$(".tackblogs-container").append($(wrapper).append($link,$date, $des));
						
					})

				},
				error:function() {
					alert("I am sorry, But I can't fetch that feed");
				}
			});
		});
		
		$(function() { 			
			$.ajax({
				url:'http://www.bvtack.com/category/multimedia/feed/',
				dataType:'xml',
				type:'GET',
				success:function(xml) {
					$(xml).find('item').each(function() {
						var title = $(this).find("title").text(); 
						var des = $(this).find("description").text();
						var link = $(this).find("link").text();
						var $des = $('<div class="linkitem"></div>').html(des);
						var $link = $('<h3></h3>').attr('href',link).attr('target','_blank').html(title);
						
						var pubDate = new Date($(this).find("pubDate").text()); 
						var day = pubDate.getDate();
						var month = pubDate.getMonth() + 1;
						var year = pubDate.getFullYear();
						var date = month + '/' + day + '/' + year;
						var $date = $('<div class="date"></div>').text(date)	
						var wrapper = "<div class='single-feed'>";
						$(".tackmultimedia-container").append($(wrapper).append($link,$date, $des));
						
					})

				},
				error:function() {
					alert("I am sorry, But I can't fetch that feed");
				}
			});
		});
		
		$(function() { 			
			$.ajax({
				url:'http://www.bvtack.com/category/n/feed/',
				dataType:'xml',
				type:'GET',
				success:function(xml) {
					$(xml).find('item').each(function() {
						var title = $(this).find("title").text(); 
						var des = $(this).find("description").text();
						var link = $(this).find("link").text();
						var $des = $('<div class="linkitem"></div>').html(des);
						var $link = $('<h3></h3>').attr('href',link).attr('target','_blank').html(title);
						
						var pubDate = new Date($(this).find("pubDate").text()); 
						var day = pubDate.getDate();
						var month = pubDate.getMonth() + 1;
						var year = pubDate.getFullYear();
						var date = month + '/' + day + '/' + year;
						var $date = $('<div class="date"></div>').text(date)	
						var wrapper = "<div class='single-feed'>";
						$(".tacknews-container").append($(wrapper).append($link,$date, $des));
						
					})

				},
				error:function() {
					alert("I am sorry, But I can't fetch that feed");
				}
			});
		});
		
				$(function() { 			
			$.ajax({
				url:'http://www.bvtack.com/category/n/feed/',
				dataType:'xml',
				type:'GET',
				success:function(xml) {
					$(xml).find('item').each(function() {
						var title = $(this).find("title").text(); 
						var des = $(this).find("description").text();
						var link = $(this).find("link").text();
						var $des = $('<div class="linkitem"></div>').html(des);
						var $link = $('<h3></h3>').attr('href',link).attr('target','_blank').html(title);
						
						var pubDate = new Date($(this).find("pubDate").text()); 
						var day = pubDate.getDate();
						var month = pubDate.getMonth() + 1;
						var year = pubDate.getFullYear();
						var date = month + '/' + day + '/' + year;
						var $date = $('<div class="date"></div>').text(date)	
						var wrapper = "<div class='single-feed'>";
						$(".tacknews-container").append($(wrapper).append($link,$date, $des));
						
					})

				},
				error:function() {
					alert("I am sorry, But I can't fetch that feed");
				}
			});
		});
		
						$(function() { 			
			$.ajax({
				url:'http://www.bvtack.com/category/opinion/feed/',
				dataType:'xml',
				type:'GET',
				success:function(xml) {
					$(xml).find('item').each(function() {
						var title = $(this).find("title").text(); 
						var des = $(this).find("description").text();
						var link = $(this).find("link").text();
						var $des = $('<div class="linkitem"></div>').html(des);
						var $link = $('<h3></h3>').attr('href',link).attr('target','_blank').html(title);
						
						var pubDate = new Date($(this).find("pubDate").text()); 
						var day = pubDate.getDate();
						var month = pubDate.getMonth() + 1;
						var year = pubDate.getFullYear();
						var date = month + '/' + day + '/' + year;
						var $date = $('<div class="date"></div>').text(date)	
						var wrapper = "<div class='single-feed'>";
						$(".tackopinion-container").append($(wrapper).append($link,$date, $des));
						
					})

				},
				error:function() {
					alert("I am sorry, But I can't fetch that feed");
				}
			});
		});
		
		$(function() { 			
			$.ajax({
				url:'http://www.bvtack.com/category/sports/feed/',
				dataType:'xml',
				type:'GET',
				success:function(xml) {
					$(xml).find('item').each(function() {
						var title = $(this).find("title").text(); 
						var des = $(this).find("description").text();
						var link = $(this).find("link").text();
						var $des = $('<div class="linkitem"></div>').html(des);
						var $link = $('<h3></h3>').attr('href',link).attr('target','_blank').html(title);
						
						var pubDate = new Date($(this).find("pubDate").text()); 
						var day = pubDate.getDate();
						var month = pubDate.getMonth() + 1;
						var year = pubDate.getFullYear();
						var date = month + '/' + day + '/' + year;
						var $date = $('<div class="date"></div>').text(date)	
						var wrapper = "<div class='single-feed'>";
						$(".tacksports-container").append($(wrapper).append($link,$date, $des));
						
					})

				},
				error:function() {
					alert("I am sorry, But I can't fetch that feed");
				}
			});
		});