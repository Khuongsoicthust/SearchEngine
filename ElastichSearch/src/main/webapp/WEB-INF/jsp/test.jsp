<%@page import="javax.swing.text.Document"%>
<%@page import="com.mkyong.elastic.model.Pages"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.Map"%>
<%@page import="java.util.List"%>
<%@page import="java.util.HashMap"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<meta name="description" content="">
<meta name="author" content="">
<title>Ngân hàng Tiên Phong | TPBank Digital</title>

<!-- font awesome CSS -->
<link href="<c:url value="/css/font-awesome.min.css"/>"
	rel="stylesheet" type="text/css">

<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
<link
	href="<c:url value="/js/ie10-viewport-bug-workaround.js"/>"
	rel="stylesheet">
<!-- Jquery UI -->
<link rel="stylesheet"
	href="<c:url value="/css/jquery-ui.css"/>">

<!-- Custom styles for this template -->
<link href="<c:url value="/css/main.css"/>" rel="stylesheet"
	type="text/css">
	
	<link href="<c:url value="/css/searchResultStyle.css"/>" rel="stylesheet"
	type="text/css">

<!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
<!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
<script
	src="<c:url value="/js/ie-emulation-modes-warning.js"/>"></script>

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<body class="not-front">
	<header id="header" class="header">
		<div class="wrap">
			<a href="#" title="Home" rel="home" class="header_logo" id="logo"><img
				src="<c:url value ="/images/logo.png"/>" alt="Home"
				class="header_logo-image"></a>
			<!-- End logo -->

			<div class="region">
				<div class="lang">
					<div class="lang_box">
						<div class="select-lang">
							<span id="edit-lang-dropdown-select_arrow" class="arrow">
								<i class="fa fa-angle-down"></i>
							</span> <span class="ddTitleText"
								id="edit-lang-dropdown-select_titletext"> <img
								src="<c:url value="/images/vi.png"/>"
								align="absmiddle">
							</span>
						</div>
						<div class="choise-lang">
							<a href="javascript:void(0);" class="selected enabled"> <img
								src="<c:url value="/images/vi.png"/>">
							</a> <a href="javascript:void(0);" class="enabled"> <img
								src="<c:url value="/images/en.png"/>"
								align="absmiddle">
							</a>
						</div>
					</div>
				</div>
				<!-- End lang -->

				<div class="search">
					<input id="keyword_text" placeholder="Tìm kiếm" value=""
						type="text"> <input id="bt-site-search" class="search_bt"
						value="Search" type="button"></input>
						<script type="text/javascript">
							var elementExists=document.getElementByClassName("expand");
							if(typeof(elementExists)!='undefined'&&elementExists!=null){
								
							}
						</script>
				</div>
				<!-- End search -->

				<div class="region_menu">
					<ul>
						<li><a href="#">TIN TỨC</a></li>
						<li><a href="#">TUYỂN DỤNG</a></li>
						<li><a class="" href="#">VỀ TPBANK</a></li>
						<li><a href="#">NHÀ ĐẦU TƯ</a></li>
						<li><a href="#">HỎI ĐÁP</a></li>
						<li><a href="#">LIÊN HỆ</a></li>
					</ul>
				</div>
				<div class="top-menu for_mobile">
					<div class="responsive-menu">
						<a href="javascript:void(0)" class="mobile_menu_line"></a>
					</div>
					<div>
						<a href="#" class="mobile_menu_ebank"> <span class="icon"></span>
							<span class="text"><i class="fa fa-lock"></i> eBank</span>
						</a>
					</div>
					<div>
						<a class="mobile_menu_flag flag-vi"><span></span></a>
					</div>
				</div>
				<div class="mobile_lang_pane">
					<div class="mobile_lang_pane_arrow"></div>
					<div class="mobile_lang_pane_inner">
						<ul class="language-switcher-locale-url">
							<li class="vi first active"><a href="/"
								class="language-link active" xml:lang="vi">Tiếng Việt <img
									class="language-icon" src="<c:url value="/images/vi.png"/>"
									alt="Tiếng Việt" title="Tiếng Việt"></a></li>
							<li class="en last"><a href="/en" class="language-link"
								xml:lang="en">English <img class="language-icon"
									src="<c:url value="/images/en.png"/>" alt="English" title="English">
							</a></li>
						</ul>
					</div>
				</div>
				<!-- Menu mobile V2 -->
				<div class="menu_mobile_tablet">
					<div class="mobile_menu_pane_arrow"></div>
					<div class="block_scoll_menu">
						<ul class="list_item_panel">
							<li class=""><a class="group-title" href="#">Khách hàng
									cá nhân</a></li>
							<li class=""><a class="group-title" href="#">Khách hàng
									doanh nghiệp<i class="fa fa-chevron-down" aria-hidden="true"></i>
							</a>
								<ul class="hidden">
									<li><a href="#"> Tài khoản<i
											class="fa fa-chevron-down"></i></a>
										<ul class="hidden">
											<li><a href="#">Tài khoản thanh toán</a></li>
											<li><a href="#">Tài khoản EasyLink</a></li>
										</ul></li>
									<li><a href="#"> Tiết kiệm</a></li>
									<li><a href="#"> Cho vay</a></li>
									<li><a href="#"> Thẻ tín dụng</a></li>
								</ul></li>
							<li class=""><a class="group-title"
								href="javascript:void(0)">Khách hàng cao cấp<i
									class="fa fa-chevron-down" aria-hidden="true"></i></a>
								<ul class="hidden">
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
								</ul></li>
							<li class=""><a class="group-title" href="#">Tin tức<i
									class="fa fa-chevron-down" aria-hidden="true"></i></a>
								<ul class="hidden">
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
								</ul></li>
							<li class=""><a class="group-title" href="#">Tuyển dụng</a>
							</li>
							<li class=""><a class="group-title" href="#">Về TPBank<i
									class="fa fa-chevron-down" aria-hidden="true"></i></a>
								<ul class="hidden">
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
								</ul></li>
							<li class=""><a class="group-title" href="#">Nhà đầu tư<i
									class="fa fa-chevron-down" aria-hidden="true"></i></a>
								<ul class="hidden">
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
									<li><a href="#"> menu cấp 2</a></li>
								</ul></li>
						</ul>
					</div>
				</div>
			</div>
			<!-- End region -->
			<div class="clear"></div>
		</div>
		<!-- End wrap header -->

		<div class="ci_stripe">
			<div class="ci_stripe_righthalf"></div>
			<div class="ci_stripe_in wrap"></div>
		</div>
		<!-- End ci_stripe -->
	</header>

	<div id="navigation">
		<div class="navigation-wrap wrap">
			<nav id="main-menu">
				<ul>
					<li><a href="#" class="home"></a></li>
					<li class="menu-personal"><a href="#">KHÁCH HÀNG CÁ NHÂN</a>
						<div class="sub-nice-menu clearfix">
							<div class="sub-menu-icon-arrow"></div>
							<div class="sub-nice-menu-inner clearfix">
								<div class="sub-menu-product-pane">
									<div
										class="sub-menu-product-pane-row sub-menu-product-pane-row-top clearfix">
										<div class="category-box">
											<div class="category-box-title">
												<div>
													<a href="#">Tài khoản</a>
												</div>
											</div>
											<div class="category-box-detail">
												<div class="category-box-detail-item text-link  ">
													<a href="#">Truy cập tài khoản mỗi ngày với dịch vụ
														eBank và miễn phí sử dụng ATM trên toàn quốc.</a>
												</div>
												<div class="category-box-detail-item after_text  ">
													<a href="#">Tài khoản thanh toán</a>
												</div>
												<div class="category-box-detail-item   ">
													<a href="#">Tài khoản EasyLink</a>
												</div>
												<div class="category-box-link viewall-link">
													<a href="#">Xem thêm</a>
												</div>
											</div>
										</div>
										<div class="category-box">
											<div class="category-box-title">
												<div>
													<a href="#">Tiết kiệm</a>
												</div>
											</div>
											<div class="category-box-detail">
												<div class="category-box-detail-item">
													<a href="#">Tiết kiệm thường lĩnh lãi định kỳ</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Tiết kiệm điện tử</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Tài khoản gửi góp Future Savings Kid</a>
												</div>
												<div class="category-box-link viewall-link">
													<a href="#">Xem thêm</a>
												</div>
											</div>
										</div>
										<div class="category-box">
											<div class="category-box-title">
												<div>
													<a href="#">Cho vay</a>
												</div>
											</div>
											<div class="category-box-detail">
												<div class="category-box-detail-item">
													<a href="#">Vay mua ô tô</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Vay mua nhà, xây sửa nhà</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Vay kinh doanh</a>
												</div>
												<div class="category-box-link viewall-link">
													<a href="#">Xem thêm</a>
												</div>
											</div>
										</div>
										<div class="category-box">
											<div class="category-box-title">
												<span>THẺ</span>
											</div>
											<div class="category-box-detail">
												<div class="category-box-detail-item">
													<a href="#">Thẻ Tín dụng</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Thẻ ATM eCounter</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Thẻ Ghi nợ quốc tế TPBank Visa Debit</a>
												</div>
												<div class="category-box-link viewall-link">
													<a href="#">Xem thêm</a>
												</div>
											</div>
										</div>
									</div>
									<!-- END sub-menu-product-pane-row-top -->
									<div
										class="sub-menu-product-pane-row sub-menu-product-pane-row-bottom clearfix">
										<div class="category-box long_box ">
											<div class="category-box-title">
												<span>Dịch vụ</span>
											</div>
											<div class="category-box-detail">
												<div class="category-box-detail-item  data_long_box ">
													<a href="#">Ngân hàng điện tử - eBank</a>
												</div>
												<div class="seperate-line"></div>
												<div
													class="category-box-detail-item text-link data_long_box data_left">
													<a href="#">Điểm giao dịch tự động TPBank LiveBank</a>
												</div>
												<div class="seperate-line"></div>
												<div class="category-box-detail-item">
													<a href="#">Khách hàng thân thiết</a>
												</div>
												<div class="category-box-detail-item data_right">
													<a href="#">Chuyển tiền</a>
												</div>
												<div class="seperate-line"></div>
												<div class="category-box-detail-item data_left">
													<a href="#">Dịch vụ chấp nhận thanh toán thẻ qua TPBank
														mPOS</a>
												</div>
												<div class="category-box-detail-item data_right">
													<a href="#">Dịch vụ khác</a>
												</div>
											</div>
										</div>
										<a class="category-box  menu_tools" href="#">
											<div class="category-box-title">
												<span>HỖ TRỢ</span>
											</div>
											<div class="category-box-detail">
												<div class="category-box-detail-item no-arrow text-img">Công
													cụ tính toán tài chính</div>
											</div>
										</a> <a class="category-box  menu_offer" href="#">
											<div class="category-box-title">
												<span>ƯU ĐÃI ĐẶC BIỆT</span>
											</div>
											<div class="category-box-detail">
												<div class="category-box-detail-item no-arrow text-img">Dành
													cho chủ thẻ tín dụng và khách hàng eBank</div>
											</div>
										</a>
									</div>
								</div>

								<div class="sub-menu-promotion-pane">
									<div class="sub-menu-promotion-pane-title">
										<a href="#">Khuyến mãi cá nhân</a>
									</div>
									<div class="sub-menu-promotion-pane-image">
										<a href="#"> <img
											src="<c:url value="/images/vay_tieu_dung_tin_chap_sieu_toc.jpg"/>"></a>
									</div>
									<div class="sub-menu-promotion-pane-name">
										<a href="#">VAY TIÊU DÙNG SIÊU TỐC TỚI 300 TRIỆU KHÔNG CẦN
											TÀI SẢN THẾ CHẤP</a>
									</div>
									<div class="sub-menu-promotion-pane-link viewall-link">
										<a href="#">Xem thêm</a>
									</div>
								</div>

							</div>
						</div></li>
					<li class="menu-corperate"><a href="#">KHÁCH HÀNG DOANH
							NGHIỆP</a>
						<div class="sub-nice-menu clearfix">
							<div class="sub-menu-icon-arrow"></div>
							<div class="sub-nice-menu-inner clearfix">
								<div class="sub-menu-product-pane">
									<div
										class="sub-menu-product-pane-row sub-menu-product-pane-row-top clearfix">
										<div class="category-box  ">
											<div class="category-box-title">
												<div>
													<a href="#">Quản lý tài khoản</a>
												</div>
											</div>
											<div class="category-box-detail">
												<div class="category-box-detail-item">
													<a href="#">Tài khoản thanh toán</a>
												</div>
												<div class="category-box-detail-item">
													<a href="">Tài khoản đồng chủ sở hữu</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Quản lý Tài khoản tập trung</a>
												</div>
												<div class="category-box-link viewall-link">
													<a href="">Xem thêm</a>
												</div>
											</div>
										</div>
										<div class="category-box">
											<div class="category-box-title">
												<div>
													<a href="#">Tiền gửi doanh nghiệp</a>
												</div>
											</div>
											<div class="category-box-detail">
												<div class="category-box-detail-item">
													<a href="">Tiền gửi có kỳ hạn trả lãi định kỳ</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Tiền gửi trực tuyến</a>
												</div>
												<div class="category-box-detail-item   ">
													<a href="#">Tiền gửi có kỳ hạn trả lãi cuối kỳ</a>
												</div>
												<div class="category-box-link viewall-link">
													<a href="#">Xem thêm</a>
												</div>
											</div>
										</div>
										<div class="category-box  ">
											<div class="category-box-title">
												<div>
													<a href="#">Cho vay và tài trợ</a>
												</div>
											</div>
											<div class="category-box-detail">
												<div class="category-box-detail-item">
													<a href="#">Cho vay mua ô tô đi lại và phục vụ SXKD</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Cho vay VND lãi suất đặc biệt</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Tài trợ dự án trọn gói</a>
												</div>
												<div class="category-box-link viewall-link">
													<a href="#">Xem thêm</a>
												</div>
											</div>
										</div>
										<div class="category-box">
											<div class="category-box-title">
												<div>
													<a href="#">Thanh toán quốc tế</a>
												</div>
											</div>
											<div class="category-box-detail">
												<div class="category-box-detail-item">
													<a href="#">Phát hành L/C nhập khẩu</a>
												</div>
												<div class="category-box-detail-item">
													<a href="/chuyen-tien-quoc-te">Chuyển tiền quốc tế</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">UPAS L/C</a>
												</div>
												<div class="category-box-link viewall-link">
													<a href="#">Xem thêm</a>
												</div>
											</div>
										</div>
									</div>
									<div
										class="sub-menu-product-pane-row sub-menu-product-pane-row-bottom clearfix">
										<div class="category-box  ">
											<div class="category-box-title">
												<div>
													<a href="#">Ngân hàng điện tử - Ebank</a>
												</div>
											</div>
											<div class="category-box-detail">
												<div
													class="category-box-detail-item text-link data_long_box data_left">
													<a href="#">TPBank eBank BIZ dành cho KHDN</a>
												</div>
												<div class="seperate-line"></div>
											</div>
										</div>
										<div class="category-box  ">
											<div class="category-box-title">
												<div>
													<a href="#">Thẻ doanh nghiệp</a>
												</div>
											</div>
											<div class="category-box-detail">
												<div class="category-box-detail-item   ">
													<a href="#">Thẻ ghi nợ quốc tế TPBank Visa Debit cho
														doanh nghiệp</a>
												</div>
												<div class="category-box-detail-item   ">
													<a href="#">Thẻ tín dụng TPBank Credit cho doanh nghiệp</a>
												</div>
											</div>
										</div>
										<div class="category-box">
											<div class="category-box-title">
												<div>
													<a href="#">Bảo lãnh</a>
												</div>
											</div>
											<div class="category-box-detail">
												<div class="category-box-detail-item">
													<a href="#">Bảo lãnh dự thầu</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Bảo lãnh thực hiện hợp đồng</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Bảo lãnh hoàn tạm ứng</a>
												</div>
											</div>
										</div>
										<div class="category-box  ">
											<div class="category-box-title">
												<div>
													<a href="#">Dịch vụ ngoại hối</a>
												</div>
											</div>
											<div class="category-box-detail">
												<div class="category-box-detail-item   ">
													<a href="#">Giao dịch hoán đổi tiền tệ</a>
												</div>
												<div class="category-box-detail-item   ">
													<a href="#">Giao dịch hối đoái kỳ hạn</a>
												</div>
												<div class="category-box-detail-item   ">
													<a href="#">Giao dịch ngoại hối giao ngay</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="sub-menu-promotion-pane">
									<div class="sub-menu-promotion-pane-title">
										<a href="#">Khuyến mãi doanh nghiệp</a>
									</div>
									<div class="sub-menu-promotion-pane-image">
										<a href="#"><img
											src="<c:url value="/images/evnpharmacy-01.jpg"/>"></a>
									</div>
									<div class="sub-menu-promotion-pane-name">
										<a href="">TPBank tài trợ vốn trọn gói ưu đãi cho các
											doanh nghiệp ngành dược, nhà thầu cho EVN</a>
									</div>
									<div class="sub-menu-promotion-pane-link viewall-link">
										<a href="#">Xem thêm</a>
									</div>
								</div>

							</div>
						</div></li>
					<li><a href="#">KHÁCH HÀNG CAO CẤP</a></li>
					<li class="top_menu_open_account top_menu_open_account_reg"><a
						href="#">ĐĂNG KÝ NHANH</a>
						<div class="sub-nice-menu clearfix">
							<div class="sub-menu-icon-arrow"></div>
							<div class="sub-nice-menu-inner">
								<div class="sub-menu-product-pane">
									<div
										class="sub-menu-product-pane-row sub-menu-product-pane-row-top clearfix">
										<div class="category-box">
											<div class="category-box-title">
												<div>
													<a href="#">TÌM SẢN PHẨM</a>
												</div>
											</div>
											<div class="category-box-detail">
												<div class="category-box-detail-item">
													<a href="#">Mở Tài khoản thanh toán</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Mở Thẻ tín dụng quốc tế TPBank Visa Chuẩn</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Mở Vay mua nhà, xây sửa nhà</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Mở Vay mua ô tô</a>
												</div>
												<div class="category-box-link viewall-link">
													<a href="#">Xem thêm</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="clear"></div>
							</div>
						</div></li>
					<li class="top_menu_open_account top_menu_open_account_ext"><a
						href="#">ĐĂNG NHẬP EBANK</a>
						<div class="sub-nice-menu clearfix">
							<div class="sub-menu-icon-arrow"></div>
							<div class="sub-nice-menu-inner">
								<div class="sub-menu-product-pane">
									<div
										class="sub-menu-product-pane-row sub-menu-product-pane-row-top clearfix">
										<div class="category-box">
											<div class="category-box-detail category-box-detail-ext">
												<div class="category-box-detail-item">
													<a href="#">Khách hàng cá nhân</a>
												</div>
												<div class="category-box-detail-item">
													<a href="#">Khách hàng doanh nghiệp</a>
												</div>
											</div>
										</div>
									</div>
									<div class="clear"></div>
								</div>
							</div>
						</div></li>
				</ul>
			</nav>
		</div>
	</div>
	<!-- End navigation -->

						<%
					
							List<Pages> modelMap= (List<Pages>)request.getAttribute("pages");
					
							List<Pages> fullPages=(List<Pages>)request.getAttribute("fullPages");
					
							String path=(String)request.getAttribute("urlMap");
							
							String[] str=path.split("/");
						%>

	<div id="main" class="page_search">
		<div id="contentx" class="column">
			<div class="page-sector-name b_left"></div>
			<div class="box_search_keyword">
				<div id="pre_search_box">Điều chỉnh thông tin</div>
				<input name="keyword_text b_left" id="box_search_keyword_text"
					value="<%= str[str.length-1] %>" type="text"> <input name="keyword_button b_right"
					id="box_search_keyword_button" value="Search" type="button" onclick="redirect()">
					<script type="text/javascript">
					function redirect(){
						
						var suburl=document.getElementById("box_search_keyword_text").value;
						
						window.location.replace("/manual/search/all/"+ suburl);
					}
					</script>
			</div>
			<div class="box_search_results b_bottom">
				Tìm thấy <span id="res_total"><%= fullPages.size() %></span> kết quả cho tìm kiếm <span
					id="res_keyword"><%= str[str.length-1] %></span>
			</div>
			<div class="content-pane-wrap">
				<aside class="sidebars b_left">
					<section class="sidebar">
						<ul class="menu">
							<li class="active"><a href="#" title="" class="active">Tất
									cả các kết quả (<%= fullPages.size() %>)</a></li>
							<li class=""><a title="" href="#">Sản phẩm và dịch vụ
									(240)</a></li>
							<li class=""><a title="" href="#" class="">Khuyến mại
									(428)</a></li>
						</ul>
					</section>
				</aside>
				<div id="content-wrap" class="b_right news-detail">
					<h2 class="page-title title" id="page-title">Tất cả các kết
						quả (<%= fullPages.size() %>)</h2>
					<!-- Phân trang -->
					<div class="pagination_news">
						<ul class="pager">
							<li class="pager-first-page">
							<a class="custom-next-previous" href="/manual/search/<%= request.getAttribute("urlMap") %>?NofPage=1&beforePage=<%= request.getAttribute("beforePage") %> " title="Link to page 1" id="" onclick="reload()">Trang đầu</a> 
							</li>
							<li class="pager-previous"></li>
							<li class="pager-previous">&lt;</li>
							<%
							String strCheck="pager-item active";
								if(request.getParameter("NofPage")!=null
								&&Integer.valueOf((request.getParameter("NofPage")))!=1){
									strCheck="pager-item";
								}
							%>
							<li class="pager-item <%= strCheck %>">
							<a href="/manual/search/<%= request.getAttribute("urlMap") %>?NofPage=1&beforePage=<%= request.getAttribute("beforePage") %> " title="Link to page 1" id="">1</a>
							</li>
							<% //out.print(modelMap.size()); %>
							<% for(int i=2;i<=fullPages.size()/5;i++){ %>
							<li class="pager-item">
								<a href="/manual/search/<%= request.getAttribute("urlMap") %>?NofPage=<%= i %>&beforePage=<%= request.getAttribute("beforePage") %> " title="Link to page <%= i %>" id=""
								"><%= i %></a>
							</li>
							<% }%>
							<li class="pager-previous"><a href="#"> &gt; </a></li>
							<li class="pager-first-page"><a class="custom-next-previous" href="/manual/search/<%= request.getAttribute("urlMap") %>?NofPage=<%= fullPages.size()/5 %>&beforePage=<%= request.getAttribute("beforePage") %> " id="">Trang cuối</a></li>
						</ul>
					</div>
					<!-- End Phân trang -->
					<% for(Pages p:modelMap){ %>
					<div class="view-content list-search">
						<div class="views-row">
							<div class="b_top">
								<div class="views-field views-field-title b_left">
									<a href="<%= p.getUrl() %>"><%= p.getTitle() %></a>
								</div>
								<a href="${modelMap.get(i).url}" class="bt-p-white b_right">Xem
									thêm<i class="fa fa-angle-right maL5"></i>
								</a>
							</div>
							<div class="b_bottom">
								<div class="hilight-content"><%= p.getDescription() %></div>
							</div>
						</div>
					</div>
					<% }%>
					<!-- Phân trang -->
					<div class="pagination_news">
						<ul class="pager">
							<li class="pager-first-page">
							<a class="custom-next-previous" href="/manual/search/<%= request.getAttribute("urlMap") %>?NofPage=1&beforePage=<%= request.getAttribute("beforePage") %> " title="Link to page 1" id="" onclick="reload()">Trang
									đầu</a> 
							</li>
							<li class="pager-previous"></li>
							<li class="pager-previous">&lt;</li>
							<li class="pager-item <%= strCheck %>">
							<a href="/manual/search/<%= request.getAttribute("urlMap") %>?NofPage=1&beforePage=<%= request.getAttribute("beforePage") %> " title="Link to page 1" id="">1</a>
							</li>
							<% //out.print(modelMap.size()); %>
							<% for(int i=2;i<=fullPages.size()/5;i++){ %>
							<li class="pager-item">
								<a href="/manual/search/<%= request.getAttribute("urlMap") %>?NofPage=<%= i %>&beforePage=<%= request.getAttribute("beforePage") %> " title="Link to page <%= i %>" id=""
								"><%= i %></a>
							</li>
							<% }%>
							<li class="pager-previous"><a href="#"> &gt; </a></li>
							<li class="pager-first-page"><a class="custom-next-previous" href="/manual/search/<%= request.getAttribute("urlMap") %>?NofPage=<%= fullPages.size()/5 %>&beforePage=<%= request.getAttribute("beforePage") %> " id="">Trang cuối</a></li>
						</ul>
					</div>
					
					<p id="demo">Chinhvu</p>
					<script type="text/javascript">

					var divs = document.getElementsByClassName('pager-item');
					<% 
						int index=0,indexBefore=0;
						if(request.getParameter("NofPage")!=null){
							
							index=Integer.valueOf((request.getParameter("NofPage")));
							
						};
						
						/* if(request.getParameter("beforePage")!=null){
							
							indexBefore=Integer.valueOf((request.getParameter("beforePage")));
							
						} */
						
						indexBefore=(int)request.getAttribute("beforePage");
						
						out.println(index);
						
					%>
						document.getElementById("demo").innerHTML=divs.length;
					<% if(index!=indexBefore){ %>
					var tempList = divs[<%= index-1 %>];
					tempList.className= 'pager-item active';
					
					var beforePageNonActive=divs[<%= indexBefore-1 %>];
					beforePageNonActive.className= 'pager-item';
					
					divs[<%= index-1+fullPages.size()/5 %>].className='pager-item active';
					divs[<%= indexBefore-1+fullPages.size()/5 %>].className='pager-item';
					
					/* divs = document.getElementsByClassName('pager-item');
					document.getElementById("demo").innerHTML=divs[1].innerHTML; */
					<% } else{ %>
					var tempList = divs[<%= index-1 %>];
					tempList.className= 'pager-item active';
					
					<% } %>
					
					</script>
					<!-- End Phân trang -->
					<div class="more-button-mobile">
						<a href="#"><i class="fa fa-chevron-down"></i>Xem thêm</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<% out.print(fullPages.size()/5+"--------------"); %>
	<% out.print(index+"--------------"); %>
	<% out.print(request.getAttribute("beforePage")+"--------------"); %>
	
	<!-- End maincontent -->
	<div class="support">
		<div class="wrap">
			<div class="support-left">
				<div>Đăng ký nhận thông tin từ TPBank</div>
				<div class="email">
					<input name="" type="email" placeholder="example@gmail.com">
					<a target="_blank" href="#" class="bt bt-s">ĐĂNG KÝ<i
						class="fa fa-angle-right maL15"></i></a>
				</div>
			</div>

			<div class="support-right">
				<div>Tải và cài đặt ứng dụng TPBank eBank lên thiết bị di động</div>
				<div class="support-right-img">
					<div class="logo-app"></div>
					<a href="#"><div class="logo-app-ios"></div></a> <a href="#"><div
							class="logo-app-google"></div></a>
					<div class="support-qr"></div>
					<div class="clear"></div>
				</div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
	<!-- End support -->
	<div class="footer">
		<div class="wrap">
			<div class="footer-index">
				<ul class="footer-index-lv1">
					<li><a class="footer-head" href="javascript:;">TẠI SAO
							CHỌN TPBANK?</a>
						<ul class="footer-index-lv2 hidden">
							<li><a href="#">Giải thưởng</a></li>
							<li><a href="#">Điểm ưu đãi</a></li>
							<li><a href="#">Khuyến Mãi</a></li>
						</ul></li>
					<li><a class="footer-head" href="javascript:;">KHÁCH HÀNG
							CÁ NHÂN</a>
						<ul class="footer-index-lv2 hidden">
							<li><a href="#">Tài khoản</a></li>
							<li><a href="#">Tiết kiệm</a></li>
							<li><a href="#">Cho vay</a></li>
							<li><a href="#">Thẻ Tín dụng</a></li>
							<li><a href="#">Thẻ ghi nợ</a></li>
							<li><a href="#">Ngân hàng điện tử - eBank</a></li>
							<li><a href="#">Chuyển tiền</a></li>
							<li><a href="#">Dịch vụ khác</a></li>
							<li><a href="#">Khách hàng thân thiết</a></li>
						</ul></li>
					<li><a class="footer-head" href="javascript:;">KHÁCH HÀNG
							DOANH NGHIỆP</a>
						<ul class="footer-index-lv2 hidden">
							<li><a href="#">Quản lý tài khoản</a></li>
							<li><a href="#">Tiền gửi doanh nghiệp</a></li>
							<li><a href="#">Cho vay và tài trợ</a></li>
							<li><a href="#">Thanh toán quốc tế</a></li>
							<li><a href="#">Dịch vụ thanh toán trong nước</a></li>
							<li><a href="#">Thẻ doanh nghiệp</a></li>
							<li><a href="#">Ngân hàng điện tử eBank BIZ</a></li>
							<li><a href="#">Bảo lãnh</a></li>
							<li><a href="#">Dịch vụ ngoại hối</a></li>
						</ul></li>
					<li><a class="footer-head" href="javascript:;">VỀ TPBANK</a>
						<ul class="footer-index-lv2 hidden">
							<li><a href="#">Tin tức</a></li>
							<li><a href="#">Sơ đồ tổ chức</a></li>
							<li><a href="#">Ban lãnh đạo</a></li>
							<li><a href="#">Lịch sử phát triển</a></li>
							<li><a href="#">Nhà đầu tư</a></li>
							<li><a href="#">Hoạt động cộng đồng</a></li>
							<li><a href="#">Tuyển dụng</a></li>
						</ul></li>
					<li><a class="footer-head" href="javascript:;">LIÊN HỆ</a>
						<ul class="footer-index-lv2 hidden">
							<li><a href="#">Chat trực tuyến</a></li>
							<li><a href="#">Gọi điện thoại</a></li>
							<li><a href="#">Gửi Email</a></li>
							<li><a href="#">Đặt lịch hẹn</a></li>
							<li><a href="#">Tìm điểm giao dịch</a></li>
							<li><a href="#">Tìm vị trí ATM</a></li>
							<li><a href="#">Tìm vị trí LiveBank</a></li>
						</ul></li>
				</ul>
			</div>
			<!-- End footer-index -->

			<div class="footer-info">
				<div class="footer-info-left">
					<div class="maB10">
						<a href="#">Điều khoản sử dụng</a> l <a href="#">Bảo mật thông
							tin khách hàng</a>
					</div>
					<div>
						<span style="font-family: Helvetica, Arial, sans-serif;">©</span>
						2017 TpBank.
					</div>
				</div>

				<div class="footer-info-right">
					<div class="social-pane">
						<a class="sc-link sc-facebook"
							href="https://www.facebook.com/TPBank" target="_blank"></a> <a
							class="sc-link sc-youtube"
							href="https://www.youtube.com/user/TienPhongBank" target="_blank"></a>
						<a class="sc-link sc-in" href="#" target="_blank"></a> <a
							class="sc-link sc-ggplus"
							href="https://plus.google.com/115406317136154504740/videos"
							target="_blank"></a>
						<div class="clear"></div>
					</div>
				</div>
			</div>
			<!-- End footer-info -->

			<div class="webchat_widget">
				<div class="webchat_widget_wrap">
					<a class="webchat_widget_icon"></a> <a class="webchat_widget_link"
						href="https://webchat.tpb.vn/WebchatASP" target="_blank">Hỗ
						trợ trực tuyến</a>
				</div>
			</div>
			<!-- End WebchatASP -->
			<div class="clear"></div>
		</div>
	</div>
	<!-- End footer -->

	<!-- Placed at the end of the document so the pages load faster -->
	<script src="<c:url value="/js/jquery-3.2.1.min.js"/>"></script>
	<script src="<c:url value="/js/jquery-ui.min.js"/>"></script>
	<script src="<c:url value="/js/owl.carousel.min.js"/>"></script>
	<script src="<c:url value="/js/main.js"/>"></script>
	<script>
		$(document).ready(function(){
		  $('.slider').bxSlider({
			auto: true,
			default: 8000,
		  });
		});
	</script>
	<!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
	<script src="<c:url value="/js/ie10-viewport-bug-workaround.js"/>"></script>
</body>