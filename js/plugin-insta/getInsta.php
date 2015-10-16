<?php
	header("Content-type: text/xml; charset=utf-8");
?>
<?php	
print '<?xml version="1.0" encoding="utf-8"?>';
print '<pro><photos>';

  $hashtag = $_GET["hashtag"];
  $number = $_GET["number"];
  
  require 'instagram.class.php';
  
  // initialize class
  $instagram = new Instagram(array(
    'apiKey'      => '901c827fee5f469390ac218bcb8ea44c',
    'apiSecret'   => '8076a60d9f5b4fb8b5585d6fc183658c'
  ));

  $tag = $hashtag;
  $limit = $number;
  $media = $instagram->getTagMedia($tag,$limit);

	foreach(array_slice($media->data, 0, $limit) as $i=>$data){	
		print "<image>";
			print "<dataLink>".$data->link."</dataLink>";
			print "<dataImgUrl>".$data->images->thumbnail->url."</dataImgUrl>";
		print "</image>";	 
	}
print '</photos></pro>';			

?>



