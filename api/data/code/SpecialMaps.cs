using System;
using System.Collections.Generic;
using System.Security.Claims;
using AutoMapper;
using csd.data.dtos;
using csd.data.Models;
using csd.helpers;
using Microsoft.AspNetCore.Http;

namespace csd.data.code
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