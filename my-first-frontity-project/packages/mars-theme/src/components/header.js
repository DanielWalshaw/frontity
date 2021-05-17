import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
      </Container>
      <Nav />
	      <!--====================  header area ====================-->
    <div class="header-area header-area--default bg-white">

        <!-- Header Bottom Wrap Start -->
        <header class="header-area  header_height-90 header-sticky">
            <div class="container-fluid container-fluid--cp-100">
                <div class="row align-items-center">
                    <div class="col-lg-4 col-md-4 d-none d-md-block">
                        <div class="header-left-side">
                            <div class="header-right-items d-none d-md-block">
                                <a href="#" class="mobile-navigation-icon" id="mobile-menu-trigger">
                                    <i class="icon-menu"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-6">
                        <div class="logo text-md-center">
                            <a href="index.html"><img src="assets/images/logo/logo.svg" alt=""></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-6">
                        <div class="header-right-side text-right">
                            <div class="header-right-items">
                                <a href="javascript:void(0)" class="search-icon" id="search-overlay-trigger">
                                    <i class="icon-magnifier"></i>
                                </a>
                            </div>

                            <div class="header-right-items d-none d-md-block">
                                <a href="wishlist.html" class="header-cart">
                                    <i class="icon-heart"></i>
                                    <span class="item-counter">3</span>
                                </a>
                            </div>

                            <div class="header-right-items">
                                <a href="#miniCart" class=" header-cart minicart-btn toolbar-btn header-icon">
                                    <i class="icon-bag2"></i>
                                    <span class="item-counter">3</span>
                                </a>
                            </div>
                            <div class="header-right-items d-none d-md-block">
                                <a href="#" data-toggle="modal" data-target="#exampleModal">
                                    <i class="icon-user"></i>
                                </a>
                            </div>
                            <div class="header-right-items d-block d-md-none">
                                <a href="#" class="mobile-navigation-icon" id="mobile-menu-trigger-2">
                                    <i class="icon-menu"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Header Bottom Wrap End -->
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
