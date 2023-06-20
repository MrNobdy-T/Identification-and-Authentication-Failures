namespace WebAPI
{
    public interface IValidator<T>
    {
        public bool IsValid(T value);
    }
}
