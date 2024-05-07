type LayoutProps = {
  children: React.ReactNode;
  layout: any;
};

export function Layout({ children, layout }: LayoutProps) {
  const { headerMenu, footerMenu } = layout;
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        {headerMenu && <Header title={layout.shop.name} menu={headerMenu} />}
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>
      {footerMenu && <Footer menu={footerMenu} />}
    </>
  );
}

function Header({ title, menu }: { title: string; menu: any }) {
  if (!title || !menu) {
    return <></>;
  }
  return <></>;
}

function Footer({ menu }: { menu: any }) {
  return <></>;
}
