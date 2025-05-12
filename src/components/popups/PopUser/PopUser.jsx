export function PopUser({ isOpen }) {
  if (!isOpen) return null; // ничего не рендерим, если не открыто

  return (
    <div
      className="header__pop-user-set pop-user-set"
      style={{ display: "block" }}
    >
      <p className="pop-user-set__name">Ivan Ivanov</p>
      <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
      <div className="pop-user-set__theme">
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </div>
      <button type="button" className="_hover03">
        <a href="#popExit">Выйти</a>
      </button>
    </div>
  );
}
