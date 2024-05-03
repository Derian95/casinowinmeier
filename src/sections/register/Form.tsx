import { Input } from "@nextui-org/input";
import { FC, useEffect, useRef } from "react";
import { Controller, SubmitHandler } from "react-hook-form";
import { CodeHallManager, RegisterData } from "./models";
import { useLocationData, useMinDate, useRegister } from "./hooks";
import { Select as NextSelect, SelectItem } from "@nextui-org/select";
import ReactCanvasConfetti from "react-canvas-confetti";
import {
  canvasStyles,
  stylesReactSelect,
} from "./utils";
import { ModalSuccess } from ".";
import { useCasinoStore } from "../../store/casinoStore";
import "./Register.css";
import { useUiGlobalStore } from "../../store/uiStore";
import { useCountrys } from "./hooks/useCountrys";
import Select from "react-select";
import { useCountryCode } from "./hooks/useCountryCode";

interface FormRegisterProps {}

export const FormRegister: FC<FormRegisterProps> = () => {
  const { token } = useCasinoStore();
  const { departments, provinces, districts, getDistricts, getProvinces } =
    useLocationData();
  const { minDate } = useMinDate();
  const {
    // postData,
    sendRegister,
    control,
    errors,
    handleSubmit,
    register,
    setValue,
    handleMaxYearsOldChange,
    handleTermsChange,
    maxYearsOld,
    terms,
    getInstance,
  } = useRegister();
  const { setModalPolitics, setModalTerms } = useUiGlobalStore();
  const { mappedCountries } = useCountrys();
  const { mappedCountriesCodes } = useCountryCode();

  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit: SubmitHandler<RegisterData> = (data) => sendRegister(data);

  const openDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.click();
    }
  };

  useEffect(() => {
    setValue("provenance", token);
  }, [token]);

  return (
    <form
      className=" p-2  pb-10  max-w-screen-md w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
        <input type="text" value={token} hidden {...register("provenance")} />
        <input type="text" value={CodeHallManager.producction} hidden {...register("idCasino")} />
        <Input
          {...register("name", { required: true })}
          classNames={{inputWrapper: "border-default-700 border-1 ",label: "z-10 font-semibold", }}
          variant="bordered"
          label="Nombres *" 
          radius="sm"
          isInvalid={errors.name?.type === "required"}
          errorMessage={errors.name?.type === "required" && "El nombre es requerido"}
          labelPlacement="outside"
          placeholder="Ingrese sus nombres"
          autoComplete="none"
        />

        <Input
          {...register("firstName", { required: true })}
          classNames={{inputWrapper: "border-default-700 border-1  ",label: "z-10 font-semibold",}}
          variant="bordered"
          label="Apellidos Paterno *"
          radius="sm"
          isInvalid={errors.firstName?.type === "required"}
          errorMessage={ errors.firstName?.type === "required" && "El apellido paterno es requerido"}
          labelPlacement="outside"
          placeholder="Ingrese su apellido paterno"
          autoComplete="none"
        />
        <Input
          {...register("lastName", { required: true })}
          classNames={{inputWrapper: "border-default-700 border-1  ",label: "z-10 font-semibold",}}
          variant="bordered"
          label="Apellido Materno *" 
          radius="sm"
          isInvalid={errors.lastName?.type === "required"}
          errorMessage={ errors.lastName?.type === "required" && "El apellido materno es requerido"}
          labelPlacement="outside"
          placeholder="Ingrese su apellido materno"
          autoComplete="none"
        />

        <NextSelect
          {...register("documentType", { required: true })}
          className="h-[40px] "
          label="Tipo de documento *"
          disallowEmptySelection
          placeholder="Elija tipo de documento"
          labelPlacement="outside"
          variant="bordered"
          radius="sm"
          classNames={{ trigger: "border-default-700 border-1", label: "z-0 font-semibold" }}
          isInvalid={errors.documentType?.type === "required"}
          errorMessage={errors.documentType?.type === "required" && "La eaa es requerida"}
          defaultSelectedKeys={["1"]}
        >
          <SelectItem key={"1"} value={1}>
            Dni
          </SelectItem>
          <SelectItem key={"2"} value={2}>
            Carnet de extranjeria
          </SelectItem>
          <SelectItem key={"3"} value={3}>
            Pasaporte
          </SelectItem>
        </NextSelect>

        <Input
          {...register("documentNumber", { required: true })}
          classNames={{ inputWrapper: "border-default-700 border-1  ",label: "z-0 font-semibold",}}
          variant="bordered"
          label="Número de documento *"
          radius="sm"
          isInvalid={errors.documentNumber?.type === "required"}
          errorMessage={errors.documentNumber?.type === "required" &&"El documento es requerido"}
          labelPlacement="outside"
          placeholder="Ingrese su número de documento"
          autoComplete="none"
        />

        <Input
          onClick={openDatePicker}
          max={minDate}
          {...register("birthDate", { required: true })}
          classNames={{inputWrapper: "border-default-700 border-1  ",label: "z-0 font-semibold",}}
          variant="bordered"
          label="Fecha de nacimiento *"
          radius="sm"
          isInvalid={errors.birthDate?.type === "required"}
          errorMessage={errors.birthDate?.type === "required" &&"La fecha de nacimiento es requerida"}
          labelPlacement="outside"
          placeholder="Ingrese su fecha de nacimiento"
          autoComplete="none"
          type="date"
        />

        <NextSelect
          {...register("gender", { required: true })}
          className="h-[40px]"
          disallowEmptySelection
          label="Sexo"
          radius="sm"
          placeholder="Elija un género *"
          labelPlacement="outside"
          variant="bordered"
          classNames={{ trigger: "border-default-700 border-1", label: "z-0 font-semibold" }}
          defaultSelectedKeys={["0"]}
          isInvalid={errors.gender?.type === "required"}
          errorMessage={errors.gender?.type === "required" && "La ancinalidad es requerida"}
        >
          <SelectItem key={"0"} value={0}>
            Hombre
          </SelectItem>
          <SelectItem key={"1"} value={1}>
            Mujer
          </SelectItem>
          <SelectItem key={"2"} value={2}>
            Otro
          </SelectItem>
        </NextSelect>

        <div>
          <label className={`text-sm mb-4 font-semibold`}>Nacionalidad *</label>
          <Controller
            name="codUbigeo"
            defaultValue={174}
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                className="basic-single mt-[1.5px]"
                classNamePrefix="select"
                isSearchable
                options={mappedCountries}
                getOptionValue={(p) => p.countryName}
                value={mappedCountries.find((c) => c.value === field.value)}
                onChange={(val) => field.onChange(val!.value)}
                defaultValue={mappedCountries[167]}
                noOptionsMessage={() => "Sin resultados"}
                placeholder="Seleccione un país"
                styles={stylesReactSelect}
              />
            )}
          />
          {errors.codUbigeo?.type === "required" && (
            <p className="text-[#f31260] text-[12px] mt-1 ml-1">
              El país es requerido
            </p>
          )}
        </div>

        <NextSelect
          label="Departamento"
          placeholder="Elija un Departamento"
          labelPlacement="outside"
          variant="bordered"
          radius="sm"
          classNames={{ trigger: "border-default-700 border-1", label: "z-0 font-semibold" }}
          className="h-[40px]"
          onChange={(e) => getProvinces(e.target.value)}
        >
          {departments.map((department) => (
            <SelectItem
              key={department.idDepartment}
              value={department.idDepartment}
            >
              {department.name}
            </SelectItem>
          ))}
        </NextSelect>

        <NextSelect
          label="Provincia"
          labelPlacement="outside"
          variant="bordered"
          radius="sm"
          classNames={{ trigger: "border-default-700 border-1", label: "z-0 font-semibold" }}
          isDisabled={provinces.length == 0}
          placeholder="Elija una provincia"
          onChange={(e) => getDistricts(e.target.value)}
        >
          {provinces.map((province) => (
            <SelectItem key={province.idProvince} value={province.idProvince}>
              {province.name}
            </SelectItem>
          ))}
        </NextSelect>

        <NextSelect
          label="Distrito"
          labelPlacement="outside"
          variant="bordered"
          radius="sm"
          classNames={{ trigger: "border-default-700 border-1", label: "z-0 font-semibold" }}
          isDisabled={districts.length == 0}
          placeholder="Elija una provincia"
          {...register("idDistrict")}
        >
          {districts.map((district) => (
            <SelectItem key={district.idDistrict} value={district.idDistrict}>
              {district.name}
            </SelectItem>
          ))}
        </NextSelect>

        <div className="flex flex-col gap-1">
        <label className={`text-sm font-semibold`}>Celular *</label>
          <div className="flex gap-1 items-center justify-center">
            <div className="w-9/12">
              <Controller
                defaultValue={174}
                name="codUbigeoNumber"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    className="basic-single "
                    classNamePrefix="select"
                    isSearchable
                    //name='countryId'
                    options={mappedCountriesCodes}
                    getOptionValue={(p) => p.countryName}
                    // onChange={handleChange}
                    value={mappedCountriesCodes.find((c) => c.value === field.value)}
                    onChange={(val) => field.onChange(val!.value)}
                    defaultValue={mappedCountriesCodes[167]}
                    noOptionsMessage={() => "Sin resultados"}
                    styles={stylesReactSelect}
                  />
                )}
              />
            </div>
            <Input
              {...register("phone", { required: true })}
              classNames={{inputWrapper: "border-default-700 border-1  ",label: "z-0 font-semibold",}}
              variant="bordered"
              radius="sm"
              isInvalid={errors.phone?.type === "required"}
              labelPlacement="outside"
              placeholder="900000000"
              autoComplete="none"
              type="tel"
            />
          </div>
          {errors.phone?.type === 'required' && (
								<p className="text-[#f31260] text-[12px]  ml-1" >
									El telefono es requerido
								</p>
							)}
        </div>

        <Input
          {...register("email")}
          classNames={{inputWrapper: "border-default-700 border-1  ",label: "z-0 font-semibold",}}
          variant="bordered"
          label="Correo electrónico"
          radius="sm"
          isInvalid={errors.email?.type === "required"}
          errorMessage={errors.email?.type === "required" && "El correo es requerido"}
          labelPlacement="outside"
          placeholder="Ingrese su correo electrónico"
          autoComplete="none"
        />
      </div>

      <div className="mt-4">
  <p className="text-sm">
    (*) Campos obligatorios para poder registrarte.</p>
</div>

      <div className="flex items-center mb-3 mt-5">
        <input
          onChange={(e) => handleMaxYearsOldChange(e.target.checked)}
          id="remember"
          type="checkbox"
          checked={maxYearsOld}
          value=""
          className="w-4 h-4 "
        />
        <label className="ml-2 text-sm font-medium text-black">
          Tengo más de 18 años, acepto los{" "}
          <span
            className="underline uppercase cursor-pointer text-xs "
            onClick={setModalTerms}
          >
            términos y condiciones
          </span>{" "}
          y
          <span
            className="underline uppercase cursor-pointer text-xs text-black"
            onClick={setModalPolitics}
          >
            {" "}
            políticas de privacidad
          </span>
          .
        </label>
      </div>

      <div className="flex items-center mb-6 text-black">
        <input
          checked={terms}
          onChange={(e) => handleTermsChange(e.target.checked)}
          id="remember"
          type="checkbox"
          value=""
          className="w-4 h-4 "
        />
        <label className="ml-2 text-sm font-medium ">
          Autorizo el tratamiento de mis datos para fines de promoción comercial
          por parte de Casinos del Norte S.A.C.
        </label>
      </div>

      {/* <button
        disabled={postData}
        type="submit"
        className={` ${
          postData ? "brightness-75 " : ""
        } bg-gradient-to-b from-[#FF5500] to-[#ff8a4f] rounded-full py-3 px-6 text-white text-base  duration-250 hover:-translate-y-1`}
      >
        {postData ? "Enviando..." : "Enviar registro"}
      </button> */}
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <ModalSuccess />
    </form>
  );
};
