function Student({ name }: { name: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>
        <span>{name}</span>
        <button>삭제</button>
      </p>
    </div>
  );
}
export default Student;
