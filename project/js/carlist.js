var obj = [
	{
        "id": "01",
        "title": "adidas阿迪达斯新款女子W CW NUVIC Jkt羽绒服BQ8778",
        "price": "￥230",
        "img": "images/list/1.jpg",
        "tit":"限时抢￥649",
        "pri":"￥530",
    }, {
        "id": "02",
        "title": "adidas阿迪达斯男子ZNE TRACK TOP针织外套BS4886 ",
        "price": "￥360",
        "img": "images/list/2.jpg",
        "tit":"限时抢￥649",
        "pri":"￥530",
    }, {
        "id": "03",
        "title": "adidas阿迪达斯男子UltraBOOST跑步鞋S82021 ",
        "price": "￥110",
        "img": "images/list/3.jpg",
        "tit":"限时抢￥649",
        "pri":"￥530",
    }, {
        "id": "04",
        "title": "adidas阿迪达斯新款男子运动基础系列针织外套S98788",
        "price": "￥666",
        "img": "images/list/1.jpg",
        "tit":"限时抢￥649",
        "pri":"￥530",
    }, {
        "id": "05",
        "title": "adidas阿迪达斯2018男子DFB SGR TEE圆领短T恤CE1724",
        "price": "￥530",
        "img": "images/list/2.jpg",
        "tit":"限时抢￥649",
        "pri":"￥530",
    }, {
        "id": "06",
        "title": "adidas阿迪达斯2018男子ENGLAND MNS圆领短T恤CW1785",
        "price": "￥99",
        "img": "images/list/3.jpg",
        "tit":"限时抢￥649",
        "pri":"￥530",
    },{
        "id": "07",
        "title": "adidas阿迪达斯新款男子运动基础系列针织外套S98788",
        "price": "￥666",
        "img": "images/list/1.jpg",
        "tit":"限时抢￥649",
        "pri":"￥530",
    }, {
        "id": "08",
        "title": "adidas阿迪达斯2018女子Chill Tank背心CF3798",
        "price": "￥530",
        "img": "images/list/2.jpg",
        "tit":"限时抢￥649",
        "pri":"￥530",
    }, {
        "id": "09",
        "title": "adidas阿迪达斯2018女子FreeLift Woven梭织外套CF3782",
        "price": "￥99",
        "img": "images/list/3.jpg",
        "tit":"限时抢￥649",
        "pri":"￥530",
    },{
        "id": "10",
        "title": "adidas阿迪达斯新款男子运动基础系列针织外套S98788",
        "price": "￥666",
        "img": "images/list/1.jpg",
        "tit":"限时抢￥649",
        "pri":"￥530",
    }];
   var oList = document.getElementById("list");
   var str = "";
//如果cookie里面有这个属性的话
if(getCookie("init")){
	//如果数据存在那么将字符串转换为json
	var data = JSON.parse(getCookie("init"));
	for(var key in data){
		for(var i in obj){
			if(key == obj[i].id){
				str+=`<div class="package">
										<dl>
											<dd>
												<label>
													<input type="checkbox" checked/>
												</label>
											</dd>
											<dt>
												<a href="#">
													<img src='+obj[i].gif+' />
												</a>
											</dt>
											<dd>
												<a href="#">
													<div>PUMA彪马 2018新款男子基础系列短裤85198101</div>
												</a>
											</dd>
											<dd>
												<div>
													<p>颜色：<em>黑</em></p>
													<p>尺码：<em>s</em></p>
												</div>
											</dd>
											<dd>
												171
												<div>
													<span>限时抢</span>
												</div>
											</dd>
											<dd>
												<a href="#">-</a>
												<input type="text" value="2" />
												<a href="#">+</a>
												<!--<span>限时抢</span>-->
											</dd>
											<dd>
												<strong>'+obj[i].price+'</strong>
											</dd>
											<dd>
												<a href="#">移入收藏夹</a><br/>
												<a href="#">删除</a>
											</dd>
										</dl>
									</div>`
			}
		}
	}
	oList.innerHTML += str;
}
