import {useForm} from 'react-hook-form';
import type {SubmitHandler, FieldValues, DefaultValues} from 'react-hook-form';
import {useMutation} from '@tanstack/react-query';
import ApiRequest from '../components/module/Api_url/ApiRequest';
import {toast} from 'react-toastify';

export function useFormMutation<T extends FieldValues>(options: {
  endpoint: string;
  successMessage: string;
  defaultValues: DefaultValues<T>;
}) {
  const form = useForm<T>({defaultValues: options.defaultValues});

  const mutation = useMutation({
    mutationFn: async (data: T) => {
      const response = await ApiRequest(options.endpoint, 'POST', data);
      return response;
    },
    onSuccess: () => {
      toast.success(options.successMessage);
      form.reset();
    },
    onError: () => {
      toast.error('خطایی رخ داد');
    },
  });

  const onSubmit: SubmitHandler<T> = (data) => mutation.mutate(data);
  return {
    register: form.register,
    handleSubmit: form.handleSubmit,
    errors: form.formState.errors,
    watch: form.watch,
    reset: form.reset,
    setValue: form.setValue,
    control: form.control,
    onSubmit,
    mutation,
  };
}
