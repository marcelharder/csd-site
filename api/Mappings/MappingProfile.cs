using AutoMapper;
using Cardiohelp.data;
using Cardiohelp.data.dtos;
using Cardiohelp.helpers;

namespace Cardiohelp.Mappings
{

    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Cardio, CardioDetailsDTO>();
           /*  .ForMember(dest => dest.patient_gender, opt => opt.MapFrom(src => src.patient_gender.getGenderDescription()));*/

            CreateMap<CardioDetailsDTO, Cardio>();
            //  .ForMember(dest => dest.patient_gender, opt => opt.MapFrom(src => src.patient_gender.getGenderCode())); 
        }
    }


}