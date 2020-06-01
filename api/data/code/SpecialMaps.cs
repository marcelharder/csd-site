using System;
using System.Collections.Generic;
using System.Security.Claims;
using AutoMapper;
using Cardiohelp.data.dtos;
using Cardiohelp.data.Models;
using Cardiohelp.helpers;
using Microsoft.AspNetCore.Http;

namespace Cardiohelp.data.code
{

    public class SpecialMaps
    {
        private IHttpContextAccessor _http;
        private IMapper _map;
        private Dropdownlists _drops;
        public SpecialMaps(IHttpContextAccessor http, IMapper map, Dropdownlists drops)
        {
            _http = http;
            _map = map;
            _drops = drops;
        }

        public User mapToUser(UserForUpdateDto help, User h)
        {
            h.active = help.active;
            h.center_id = help.center_id;
            h.contributor_id = help.contributor_id;
            h.Id = help.Id;
            h.paid_till = help.paid_till;
            h.user_role = help.user_role;
            h.username = help.username;
            return h;
        }

        public UserForReturnDto mapToUserForReturn(User help)
        {
            var h = new UserForReturnDto();
            h.active = help.active;
            h.center_id = help.center_id;
            h.contributor_id = help.contributor_id;
            h.Id = help.Id;
            h.paid_till = help.paid_till;
            h.user_role = help.user_role;
            h.username = help.username;
            return h;
        }

        public List<CardioForReturn> mapToListOfmessageToReturnFromListOfMessageAsync(PagedList<Cardio> messagesFromRepo)
        {
            var help = new List<CardioForReturn>();
            foreach (Cardio c in messagesFromRepo)
            {
                var d = new CardioForReturn();
                d.Id = c.Id;
                d.center_id = c.center_id;
                d.cassette_id = c.cassette_id;
                d.contributor_id = c.contributor_id;
                d.indication = getIndication(c.indication);
                d.patient_age = c.patient_age;
                d.patient_gender = c.patient_gender;
                d.registry_id = c.registry_id;
                d.support_mode = c.support_mode;
                d.time_supported = c.time_supported;
                help.Add(d);
            }
            return help;
        }
        public CardioDetailsDTO mapToCardioDetails(Cardio c)
        {
            var help = new CardioDetailsDTO();
            help = _map.Map<Cardio, CardioDetailsDTO>(c);
            return help;
        }

        public Cardio mapToCardio(CardioDetailsDTO ctd)
        {
           
            return _map.Map<CardioDetailsDTO, Cardio>(ctd);
        }


        public int getCurrentUserId()
        {
            var userId = _http.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return Convert.ToInt32(userId);
        }

        private string getIndication(int indication)
        {
            var help = "";
            var ret = new List<Class_Item>();
            ret = _drops.getReasonForUse();
            help = ret.Find(x => x.Value == indication).Description;
            return help;
        }



    }






}