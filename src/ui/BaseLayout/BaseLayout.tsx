import { Header } from "../Header";
import ListStudentsLayout from "../ListStudentsLayout";
import "./styles.css";

export const BaseLayout = () => {
  return (
    <>
      <Header />

      <main>
        <section className="content">
          <div className="container content__container">
            <h1 className="main-title">Студенты</h1>
            <ListStudentsLayout />
          </div>
        </section>
      </main>
    </>
  );
};
